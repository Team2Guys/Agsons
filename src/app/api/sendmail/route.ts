import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'mail.blindsandcurtains.ae',
  port: 587,
  secure: false,
  auth: {
    user: `${process.env.NEXT_PUBLIC_ADMIN_MAIL}`,
    pass: `${process.env.NEXT_PUBLIC_ADMIN_PASSWORD}`,
  },
});

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, message } = body;
    console.log(firstName, transporter, "transporter")

    const mailOptions = {
      from: `${process.env.NEXT_PUBLIC_CONTACTUS_MAIL}`,
      to: `${process.env.NEXT_PUBLIC_CONTACTUS_MAIL}`,
      subject: 'Agsons Contact form submission',
      text: `Name: ${firstName} ${lastName}\nEmail: ${email} \nphone: ${phone}\nMessage: ${message}`,
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
