import { NextResponse } from "next/server";
import { Resend } from "resend";

// Ensure the API key is available
const resend = new Resend(process.env.RESEND_API_KEY || "re_dummy");

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

    // Send email via Resend
    // We send from your verified custom domain to your personal/business inbox
    const { data, error } = await resend.emails.send({
      from: "Zyvane Contact <contact@zyvanetechnologies.com>", // MUST be verified in Resend
      to: ["contact@zyvanetechnologies.com"], // We send it to your business email (which forwards to Gmail)
      replyTo: email, // This allows you to click 'Reply' in Gmail and reply directly to the client
      subject: `[Zyvane Inquiry] New Project from ${name || email}`,
      html: `
        <div style="font-family: Arial, sans-serif; background: #f9f9f9; padding: 20px; color: #333;">
          <div style="background: #fff; padding: 20px; border-radius: 8px; border-top: 4px solid #10b981;">
            <h2 style="margin-top: 0;">New Client Inquiry</h2>
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

    if (error) {
      console.error("[Resend Error]:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: "Payload transmitted successfully.", data });
  } catch (error) {
    console.error("[Contact API Error]:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
