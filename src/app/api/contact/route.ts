import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    // The Resend API key will be pulled from process.env.RESEND_API_KEY
    // Users should add this in their .env.local file.
    // Instantiate here so build doesn't fail if key is missing
    const resend = new Resend(process.env.RESEND_API_KEY || "re_dummy");

    const { name, email, company, budget, timeline, projectDetails } = await req.json();

    // Basic validation
    if (!email || !projectDetails) {
      return NextResponse.json({ error: "Email and Project Details are required." }, { status: 400 });
    }

    // Send email via Resend
    // We send this TO the company owner (hello@zyvane.com or user's email)
    const { data, error } = await resend.emails.send({
      from: "Zyvane Terminal <onboarding@resend.dev>", // Uses resend test domain by default
      to: ["rajukumar87589@gmail.com"], // Contact form submissions will go here
      replyTo: email,
      subject: `[NEW PAYLOAD] Project Inquiry from ${name || "Unknown"}`,
      html: `
        <div style="font-family: monospace; background: #000; color: #34D399; padding: 20px;">
          <h2>⚠️ NEW TERMINAL INQUIRY ⚠️</h2>
          <hr style="border-color: #34D399;"/>
          <p><strong>SENDER:</strong> ${name || "N/A"}</p>
          <p><strong>EMAIL:</strong> ${email}</p>
          <p><strong>COMPANY:</strong> ${company || "N/A"}</p>
          <p><strong>BUDGET:</strong> ${budget || "N/A"}</p>
          <p><strong>TIMELINE:</strong> ${timeline || "N/A"}</p>
          <br/>
          <p><strong>PROJECT DETAILS:</strong></p>
          <p style="background: #111; padding: 15px; border-left: 2px solid #34D399;">
            ${projectDetails}
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend Error:", error);
      return NextResponse.json({ error: "Failed to process transmission." }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("API Route Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
