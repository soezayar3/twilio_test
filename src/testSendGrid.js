const sgMail = require("@sendgrid/mail");
const dotenv = require("dotenv");
dotenv.config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const msg = {
    to: "email",
    from: process.env.FROM_EMAIL,
    name: "name",
    subject: "Sending with Twilio SendGrid is Fun",
    text: "and easy to do anywhere, even with Node.js",
    html: "<strong>and easy to do anywhere, even with Node.js</strong>",
};

sgMail
    .send(msg)
    .then(() => {
        console.log(`Email sent to ${msg.to}`);
    })
    .catch((error) => {
        console.error(error);
    });
