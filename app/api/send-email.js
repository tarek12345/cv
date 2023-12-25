// pages/api/send-email.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).end(); // Method Not Allowed
    }

    const { to, subject, body } = req.body;

    try {
        // Your email sending logic using nodemailer
        const transporter = nodemailer.createTransport({
            // Your email configuration goes here
            // ...
        });

        await transporter.sendMail({
            from: 'your_email@gmail.com',
            to: to,
            subject: subject,
            text: body,
        });

        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
