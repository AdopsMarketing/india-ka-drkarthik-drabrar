export const runtime = "nodejs";

import { uploadFileToDrive } from "./google-drive";
import { appendToGoogleSheet } from "./google-sheets";
// Removed import of Request as it's not exported from 'next/server'

export async function POST(req: Request) {
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ message: "Only POST allowed" }), {
      status: 405,
    });
  }

  try {
    const body = await req.json();
    const {
      fullName,
      age,
      primaryConcern,
      preferredDate,
      preferredTime,
      phone,
      email,
      file,
    } = body;

    const sanitizedPhone = `'${phone}'`;
    let fileUrl = "";

    fileUrl = await uploadFileToDrive(file);

    await appendToGoogleSheet([
      fullName,
      age,
      primaryConcern,
      preferredDate,
      preferredTime,
      sanitizedPhone,
      email,
      fileUrl,
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
