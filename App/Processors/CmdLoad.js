const _ = require('lodash');
const fs = require('fs');

class CmdLoad {

    path = 'commands';

    getCommandName() {
        return '$cmdLoad';
    }

    getCommandDescription() {
        return `${this.getCommandName()} - loads saved command ($cmdLoad test)`;
    }

    async respondToCommand(key) {
        const database = JSON.parse(fs.readFileSync('database.json'));
        return _.get(database, [this.path, key]);
    }
}

module.exports = CmdLoad;