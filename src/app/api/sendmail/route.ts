import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'mail.blindsandcurtains.ae',
  port: 587,
  secure: false,
  auth: {
    user: 'info@artiart.ae',
    pass: 'Queryart@035',
  },
});

export const POST = async (req: NextRequest) => {
  try {
    console.log('Server trigger bhai');
    const body = await req.json();
    const { name, email, message, subject } = body;

    const mailOptions = {
      from: 'info@agsons.ae',
      to: 'mujtaba.shafique01@gmail.com',
      subject: subject,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 },
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Error sending email' }, { status: 500 });
  }
};
