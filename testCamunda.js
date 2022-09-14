const dotenv = require("dotenv");
dotenv.config();

const camundaClient = require("./camundaClient.js");

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhoneNo = process.env.TWILIO_PHONE_NO;
const client = require("twilio")(accountSid, authToken);

camundaClient.subscribe("SendEmail", async ({ task, taskService }) => {
    console.log("TASK: SendEmail");

    const payload = {
        sender: task.variables.get("sender"),
        receiver: task.variables.get("receiver"),
        body: task.variables.get("body"),
    };

    if (payload.receiver) {
        const sendSMS = await client.messages.create({
            body: "Hello from node plus camunda plus twilio",
            from: `${twilioPhoneNo}`,
            to: "+959400495500",
        });
        if (sendSMS?.body) {
            console.log(sendSMS);
            await taskService.complete(task);
        }
    } else {
        await taskService.handleFailure(task, {
            errorMessage: "Cannot send message",
            retries: 1,
            retryTimeout: 1000,
        });
    }

    console.log("TASK: SendEmail Done");
});
