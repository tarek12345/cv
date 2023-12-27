// pages/api/send-email.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).end(); // Method Not Allowed
    }

    const { recipient, subject, message } = req.body;

    try {
        // Retrieve the email API URL and credentials from environment variables
        const emailApiUrl = process.env.NEXT_PUBLIC_EMAIL_API;
        const emailUser = process.env.EMAIL_USER;
        const emailPass = process.env.EMAIL_PASS;

        // Your email sending logic using nodemailer
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: emailUser,
                pass: emailPass,
            },
        });

        await transporter.sendMail({
            from: emailUser,
            to: recipient,
            subject: subject,
            text: message,
        });

        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
