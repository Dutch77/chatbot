const _ = require('lodash');
const fs = require('fs');

class VarSave {
    path = 'store';

    getCommandName() {
        return '$varSave';
    }

    getCommandDescription() {
        return `${this.getCommandName()} - saves var ($var key your text is here)`
    }

    async respondToCommand(command) {
        if (!command) {
            return;
        }
        const regex = /(\w+)(\s)+((.|\s)+)/;
        const matches = regex.exec(command);
        const key = _.get(matches, [1]);
        const value = _.get(matches, [3]);
        const database = JSON.parse(fs.readFileSync('database.json'));
        if (key && value) {
            _.set(database, [this.path, key], value);
            const data = JSON.stringify(database)
            fs.writeFileSync('database.json', data);
        }
    }
}

module.exports = VarSave;