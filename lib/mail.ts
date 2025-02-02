
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const domain = 'http://localhost:3000';

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmationLink = `${domain}/auth/verify-email?token=${token}`;
  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: email,
    subject: 'Verify your email',
    html: `
      <h1>Verify your email</h1>
      <p>Click the button below to verify your email address.</p>
      <a href="${confirmationLink}">Verify email</a>
    `,
  });
};
