const dotenv = require("dotenv");
dotenv.config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhoneNo = process.env.TWILIO_PHONE_NO;
const client = require("twilio")(accountSid, authToken);

client.messages.create({
    from: `whatsapp:${twilioPhoneNo}`,
    body: "Hello from node, twilio and whatsapp",
    to: "whatsapp:+959400495500",
});
