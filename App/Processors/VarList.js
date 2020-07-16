const _ = require('lodash');
const fs = require('fs');

class VarList {

    path = 'store';

    getCommandName() {
        return '$varList';
    }

    getCommandDescription() {
        return `${this.getCommandName()} - list of saved vars`;
    }

    async respondToCommand(command) {
        const database = JSON.parse(fs.readFileSync('database.json'));
        const store = _.get(database, [this.path]);
        return Object.keys(store).join(', ');
    }
}

module.exports = VarList;