const dotenv = require("dotenv");
dotenv.config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhoneNo = process.env.TWILIO_PHONE_NO;
const client = require("twilio")(accountSid, authToken);

client.messages
    .create({
        body: "Hello from node plus twilio",
        from: `${twilioPhoneNo}`,
        to: "+959400495500",
    })
    .then((message) => console.log(message))
    .catch((e) => console.log(e));
