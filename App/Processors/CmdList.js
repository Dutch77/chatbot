const _ = require('lodash');
const fs = require('fs');

class CmdList {

    path = 'jokes';

    getCommandName() {
        return '$cmdList';
    }

    getCommandDescription() {
        return `${this.getCommandName()} - list of saved commands`;
    }

    async respondToCommand(command) {
        const database = JSON.parse(fs.readFileSync('database.json'));
        const store = _.get(database, [this.path]);
        return Object.keys(store).join(', ');
    }
}

module.exports = CmdList;