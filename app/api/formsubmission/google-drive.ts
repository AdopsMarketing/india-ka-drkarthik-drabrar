import { google } from "googleapis";
import fs from "fs";
import os from "os";
import path from "path";

interface UploadFile {
  buffer: Buffer;
  name: string;
  type: string;
}

export async function uploadFileToDrive(file: UploadFile): Promise<string> {
  // Authenticate using Google JWT
  const auth = new google.auth.JWT({
    email: process.env.GOOGLE_CLIENT_EMAIL,
    key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    scopes: ["https://www.googleapis.com/auth/drive"],
  });

  const drive = google.drive({ version: "v3", auth });

  try {
    // Ensure the file is a valid object with necessary properties
    if (!file || !file.buffer || !file.name || !file.type) {
      throw new Error("Invalid file object.");
    }

    // Generate a temporary file path
    const tempFilePath = path.join(os.tmpdir(), file.name);

    // Create a temporary file on disk to use with Google Drive upload
    fs.writeFileSync(tempFilePath, file.buffer);

    // Upload the file to Google Drive
    const response = await drive.files.create({
      requestBody: {
        name: file.name,
        parents: [process.env.GOOGLE_DRIVE_FOLDER_ID!], // Optional: specify the folder ID
      },
      media: {
        mimeType: file.type,
        body: fs.createReadStream(tempFilePath), // Use fs.createReadStream to send the file content
      },
      fields: "id", // Return only the file ID
      supportsAllDrives: true, // Allow access to shared drives
    });

    // Clean up the temporary file after upload
    fs.unlinkSync(tempFilePath);

    // Set file permissions to 'reader' (public access)
    await drive.permissions.create({
      fileId: response.data.id!,
      requestBody: { role: "reader", type: "anyone" },
      supportsAllDrives: true,
    });

    // Return the publicly accessible URL of the uploaded file
    return `https://drive.google.com/file/d/${response.data.id}/view`;
  } catch (err) {
    console.error("Error uploading file:", err);
    throw new Error("Failed to upload file to Google Drive");
  }
}
