// @ts-ignore
const {email, password} = require('../config.json');
const login = require('./Helpers/LoginHelper');
const _ = require('lodash');
const processors = require('./Processors');

class App {
    api = null;

    async start() {
       this.api = await login({email, password});
    }

    async listen() {
        if (!this.api) {
            await this.start();
        }

        this.api.listenMqtt(async (error, message) => {
            await this.processMessage(message.body, message.threadID)
        });
        // await this.processMessage('$help', 666)
    }

    async processMessage(message, threadId) {
        console.log('message:', message);
        if (!message) {
            return;
        }

        const regex = /(\$\w+)(\s+)?((.|\s)+)?/;
        const matches = regex.exec(message);
        const command = _.get(matches, [1]);
        const value = _.get(matches, [3]);
        const processor = this.getProcessor(command);
        console.log('processor:', processor);
        if (processor) {
            const responseMessage = await processor.respondToCommand(value);
            console.log('responseMessage:', responseMessage)
            if (responseMessage) {
                this.sendMessage(responseMessage, threadId)
            }
        }
    }

    getProcessor(command) {
        return _.find(processors, (processor) => processor.getCommandName() === command);
    }

    sendMessage(message, threadID) {
        this.api.sendMessage(message, threadID);
    }
}


module.exports = App;