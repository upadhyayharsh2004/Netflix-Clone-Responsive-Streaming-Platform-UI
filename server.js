const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const port = 5500;

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Serve HTML form
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'Netflix.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'sign_in.html'));
});

// Handle form submission
app.post('/send_email', (req, res) => {
    const { user_email } = req.body;

    // Nodemailer setup
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER, 
            pass: process.env.EMAIL_PASS 
        }
    });

    const mailOptions = {
        from: process.env.EMAIL_USER, 
        to: user_email,
        subject: 'Thanks for Enquiry',
        text: 'Hello, From Himani Foods, How can we help you?',
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).json({ success: false, message: error.toString() });
        }
        console.log('Email sent:', info.response);
        res.json({ success: true, message: 'Email Sent Successfully!' });
    });
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
