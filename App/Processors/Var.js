const _ = require('lodash');
const fs = require('fs');

class Var {

    path = 'store';

    getCommandName() {
        return '$var';
    }

    getCommandDescription() {
        return `${this.getCommandName()} - loads saved var. ($var test)`;
    }

    async respondToCommand(key) {
        const database = JSON.parse(fs.readFileSync('database.json'));
        return _.get(database, [this.path, key]);
    }
}

module.exports = Var;