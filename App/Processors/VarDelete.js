const _ = require('lodash');
const fs = require('fs');

class VarDelete {

    path = 'store';

    getCommandName() {
        return '$varDelete';
    }

    getCommandDescription() {
        return `${this.getCommandName()} - deletes saved var ($varDelete test)`;
    }

    async respondToCommand(key) {
        const database = JSON.parse(fs.readFileSync('database.json'));
        if (key && _.get(database, [this.path, key])) {
            delete database[this.path][key];
            const data = JSON.stringify(database)
            fs.writeFileSync('database.json', data);
        }
    }
}

module.exports = VarDelete;