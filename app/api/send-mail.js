// pages/api/send-email.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method not allowed' });
    return;
  }

  const { email } = req.body;

  // Configure the nodemailer transport with your email provider details
  const transporter = nodemailer.createTransport({
    host: 'smtp.example.com', // replace with your SMTP server
    port: 587,                // or 465 for SSL
    secure: false,            // true for SSL, false for TLS/STARTTLS
    auth: {
      user: 'your_email@example.com', // replace with your email
      pass: 'your_email_password',    // replace with your password
    },
  });

  try {
    await transporter.sendMail({
      from: '"Your Name" <your_email@example.com>', // sender address
      to: email, // recipient address
      subject: 'Custom Message Subject',
      text: 'This is the body of your custom message.',
      html: '<p>This is the body of your custom message.</p>',
    });

    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to send email.' });
  }
}