import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, company, budget, timeline, projectDetails } = await req.json();

    // Strict validation
    if (!email || !projectDetails) {
      return NextResponse.json(
        { error: "Email and Project Details are required fields." },
        { status: 400 }
      );
    }

    // Configure Nodemailer transporter using Google Workspace SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST || "smtp.gmail.com",
      port: Number(process.env.MAIL_PORT) || 587,
      secure: process.env.MAIL_ENCRYPTION === "ssl" || process.env.MAIL_PORT === "465", // true for 465, false for other ports
      auth: {
        user: process.env.MAIL_FROM_ADDRESS,
        pass: process.env.MAIL_PASSWORD, // Google Workspace App Password
      },
    });

    const fromAddress = `"${process.env.MAIL_FROM_NAME || 'Zyvane Technologies'}" <${process.env.MAIL_FROM_ADDRESS}>`;
    const toEmail = process.env.CONTACT_TO_EMAIL || process.env.MAIL_FROM_ADDRESS || "admin@zyvanetechnologies.com";

    // Send email via Nodemailer
    const info = await transporter.sendMail({
      from: fromAddress,
      to: toEmail,
      replyTo: email,
      subject: `[Zyvane Inquiry] New Project from ${name || email}`,
      html: `
        <div style="font-family: Arial, sans-serif; background: #f9f9f9; padding: 20px; color: #333;">
          <div style="background: #fff; padding: 20px; border-radius: 8px; border-top: 4px solid #10b981;">
            <h2 style="margin-top: 0;">⚡ New Client Inquiry</h2>
            <p><strong>Name:</strong> ${name || "N/A"}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Company:</strong> ${company || "N/A"}</p>
            <p><strong>Budget:</strong> ${budget || "N/A"}</p>
            <p><strong>Timeline:</strong> ${timeline || "N/A"}</p>
            <hr style="border: 1px solid #eee; margin: 20px 0;" />
            <h3>Project Details:</h3>
            <p style="background: #f4f4f5; padding: 15px; border-radius: 4px; white-space: pre-wrap;">${projectDetails}</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true, message: "Payload transmitted successfully.", messageId: info.messageId });
  } catch (error: any) {
    console.error("[Contact API Error]:", error);
    return NextResponse.json({ error: error.message || "Internal Server Error" }, { status: 500 });
  }
}
