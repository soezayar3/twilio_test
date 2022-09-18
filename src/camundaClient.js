const Camunda = require("camunda-external-task-client-js");
const dotenv = require("dotenv");
dotenv.config();

const { Client, BasicAuthInterceptor, logger } = Camunda;

const basicAuthentication = new BasicAuthInterceptor({
    username: process.env.CAMUNDA_USERNAME,
    password: process.env.CAMUNDA_PASSWORD,
});

const config = {
    baseUrl: process.env.CAMUNDA_URL,
    interceptors: basicAuthentication,
    use: logger,
};

const camundaClient = new Client(config);

module.exports = camundaClient;
