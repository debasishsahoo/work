import express, { Request, Response } from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

router.post("/", async (req: Request, res: Response) => {
  try {
    const { name, email, phone, message, subject } = req.body;

    if (!name || !email || !phone || !message || !subject) {
      res
        .status(400)
        .json({ success: false, message: "All fields are required" });
      return;
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // 📩 Format the email in HTML
    const htmlBody = `
  <h2>New Contact Request</h2>
  <p><strong>Name:</strong> ${name}</p>
  <p><strong>Email:</strong> ${email}</p>
  <p><strong>Phone:</strong> ${phone}</p>
  <p><strong>Message:</strong> ${message || "No message provided."}</p>

  <p style="margin-top: 20px; font-size: 0.9em;">Sent automatically from the contact us form.</p>
`;

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.GMAIL_USER,
      subject: `New Contact Request from ${name}`,
      html: htmlBody,
    });

    res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Internal server error: ", error);
    res.status(500).json({ success: false, message: "Internal server Error" });
  }
});

export { router };
