const _ = require('lodash');
const fs = require('fs');
const evalHelper = require('../Helpers/EvalHelper');

class Cmd {
    path = 'commands';

    getCommandName() {
        return '$cmd';
    }

    async respondToCommand(input) {
        const database = JSON.parse(fs.readFileSync('database.json'));

        const regex = /(\w+)((\s)+((.|\s)+))?/;
        const matches = regex.exec(input);
        const commandKey = _.get(matches, [1]);
        const parameters = _.get(matches, [4]);

        const command = _.get(database, [this.path, commandKey]);
        if (!command) {
            return;
        }

        return evalHelper(command, parameters);
    }
}

module.exports = Cmd;