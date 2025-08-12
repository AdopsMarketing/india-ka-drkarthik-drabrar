export const runtime = "nodejs";

import { uploadFileToDrive } from "./google-drive";
import { appendToGoogleSheet } from "./google-sheets";

export async function POST(request: Request) {
  if (request.method !== "POST") {
    return new Response(JSON.stringify({ message: "Only POST allowed" }), {
      status: 405,
    });
  }

  try {
    const formData = await request.formData();
    const fullName = `${formData.get("fullName")}`;
    const age = Number(formData.get("age"));
    const primaryConcern = `${formData.get("primaryConcern")}`;
    const preferredDate = `${formData.get("preferredDate")}`;
    const preferredTime = `${formData.get("preferredTime")}`;
    const email = `${formData.get("email")}`;
    const location = `${formData.get("location")}`;
    const utm_campaign = `${formData.get("utm_campaign")}`;
    const utm_source = `${formData.get("utm_source")}`;
    const utm_medium = `${formData.get("utm_medium")}`;
    const utm_term = `${formData.get("utm_term")}`;
    const utm_content = `${formData.get("utm_content")}`;

    if (
      !fullName ||
      !age ||
      !primaryConcern ||
      !preferredDate ||
      !preferredTime ||
      !location
    ) {
      
      const missingFields = [];
      if (!fullName) missingFields.push("fullName");
      if (!age) missingFields.push("age");
      if (!primaryConcern) missingFields.push("primaryConcern");
      if (!preferredDate) missingFields.push("preferredDate");
      if (!preferredTime) missingFields.push("preferredTime");
      if (!location) missingFields.push("location");

      return new Response(
        JSON.stringify({ error: `Missing required fields: ${missingFields.join(", ")}` }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Fixed string interpolation issue
    const sanitizedPhone = `${formData.get("phone")}`;
    let fileUrl = "";

    const fileEntry = formData.get("file");
    if (fileEntry && fileEntry instanceof File) {
      fileUrl = await uploadFileToDrive(fileEntry);
    } 

    await appendToGoogleSheet([
      fullName,
      age,
      primaryConcern,
      preferredDate,
      preferredTime,
      sanitizedPhone,
      email,
      location,
      fileUrl,
      utm_campaign,
      utm_source,
      utm_medium,
      utm_term,
      utm_content,
    ]);

    return new Response(
      JSON.stringify({ message: "Appointment saved with file!", fileUrl }),
      {
        status: 201,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (err: any) {
    console.error("Upload or Sheets error:", err);
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
