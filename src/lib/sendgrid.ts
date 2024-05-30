import sgMail, { MailDataRequired } from "@sendgrid/mail";

type Props = {
  to: string;
  templateName: "ContactSubmission";
  dynamicTemplateData?: Record<string, string>;
};

export const sendEmail = async ({
  to,
  templateName,
  dynamicTemplateData,
}: Props) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

  const msg: MailDataRequired = {
    to,
    from: {
      email: "dan@dwdesign.io",
      name: "Dan Contact Request",
    },
    templateId: templates[templateName],
    dynamicTemplateData,
  };

  try {
    await sgMail.send(msg);
  } catch (error) {
    console.error(error);
    throw new Error("Failed to send email");
  }
};

const templates = {
  ContactSubmission: "d-996afd79df9b498c9a4ff74ec5dbce90",
};