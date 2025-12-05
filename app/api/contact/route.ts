import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, number, message } = await req.json();

    // SMTP Transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER, // Your Gmail address
        pass: process.env.GMAIL_PASS, // Your Gmail app password
      },
    });
    //alternative way to write for test code not good practice
// SMTP Transporter
    /* const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: dks@gmail.com, // Your Gmail address
        pass: plxs tsds vptp vsed, // Your Gmail app password
      },
    }); */

    // Email Content
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER, // Send to your Gmail
      subject: "New Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nNumber: ${number}\nMessage: ${message}`,
    };

    // Send Email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  }catch (error: unknown) {
    console.error("Error sending email:", error); // Now error is used

    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}


