const nodemailer = require('nodemailer');

const sendEmail = async (req, res) => {
    try {
        // Your email sending logic using nodemailer
        // ...

        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = { sendEmail };