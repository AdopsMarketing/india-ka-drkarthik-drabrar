import { google } from "googleapis";
import mime from "mime";
import { Readable } from "stream";

// POST handler for /api/upload
export async function uploadFileToDrive(file: File): Promise<string> {
  const debug: string[] = []; // Collect logs for debugging

  try {
    debug.push("Step 1: API route hit");

    // Parse the form-data
    debug.push("Step 2: request.formData() succeeded");

    // Get file
    if (!file) {
      throw new Error("No file provided");
    }

    debug.push(
      `Step 3: Found file '${file.name}', size=${file.size}, type=${file.type}`
    );

    // Convert to Buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    debug.push("Step 4: File converted to Buffer. Length: " + buffer.length);

    // Convert Buffer to Readable stream (fixes .pipe issue)
    const readableStream = Readable.from(buffer);
    debug.push("Step 5: Readable stream created");

    // Google Drive JWT Auth
    const auth = new google.auth.JWT({
      email: process.env.GOOGLE_CLIENT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      scopes: ["https://www.googleapis.com/auth/drive"],
    });
    const drive = google.drive({ version: "v3", auth });
    debug.push("Step 6: Google Drive Auth client created");

    // Ensure GOOGLE_DRIVE_FOLDER_ID is defined
    const folderId = process.env.GOOGLE_DRIVE_FOLDER_ID;
    if (!folderId) {
      throw new Error("GOOGLE_DRIVE_FOLDER_ID environment variable is not set");
    }

    // Upload to Google Drive
    const driveRes = await drive.files.create({
      requestBody: {
        name: file.name,
        parents: [folderId], // ID of folder in Shared Drive or the Shared Drive root
      },
      media: {
        mimeType: mime.getType(file.name) || "application/octet-stream",
        body: readableStream,
      },
      supportsAllDrives: true, // important to specify when working with Shared Drives
      fields: "id, webViewLink",
    });

    debug.push("Step 7: File uploaded to Google Drive");

    // Return the file URL from Google Drive's response
    const fileUrl = driveRes.data.webViewLink;

    return fileUrl || "";
  } catch (err) {
    debug.push("CATCH: " + (err instanceof Error ? err.message : String(err)));
    console.error("Upload error:", err);
    throw err instanceof Error ? err : new Error("Upload failed");
  }
}
