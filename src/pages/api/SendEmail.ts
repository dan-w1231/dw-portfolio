import { NextApiRequest, NextApiResponse } from 'next';
import { sendEmail } from "../../lib/sendgrid";

export default async function sendEmailRoute(req: NextApiRequest, res: NextApiResponse) {
  
  res.setHeader('Access-Control-Allow-Origin', 'https://dwdesign.io');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    // Pre-flight request stuff?
    res.status(200).end();
    return;
  }

  try {
    const { name, email, message } = req.body;

    await sendEmail({
      to: "dannywallace1231@gmail.com",
      templateName: "ContactSubmission",
      dynamicTemplateData: {
        name,
        email,
        message,
      },
    });

    res.status(200).json({ errorMessage: null });
  } catch (error) {
    console.error(error);
    res.status(500).json({ errorMessage: "Something went wrong" });
  }
}