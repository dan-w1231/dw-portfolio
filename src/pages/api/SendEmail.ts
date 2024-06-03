import { NextApiRequest, NextApiResponse } from 'next';
import { sendEmail } from "../../lib/sendgrid";

export default async function sendEmailRoute(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'OPTIONS') {
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