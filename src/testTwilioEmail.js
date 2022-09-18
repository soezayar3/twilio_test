const dotenv = require("dotenv");
dotenv.config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const verifySid = process.env.VERIFY_SID;
const client = require("twilio")(accountSid, authToken);

const sendEmail = async () => {
    const mail = await client.verify.v2.services(verifySid).verifications.create({ to: "email", channel: "email" });
    if (mail) {
        console.log(mail);
    }
};

sendEmail();
