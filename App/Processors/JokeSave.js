const fs = require('fs');
const _ = require('lodash');

class JokeSave {
    path = 'jokes';

    getCommandName() {
        return '$jokeSave';
    }

    getCommandDescription() {
        return `${this.getCommandName()} - saves joke ($jokeSave text of joke here)`;
    }

    async respondToCommand(joke) {
        if (!joke) {
            return;
        }
        const database = JSON.parse(fs.readFileSync('database.json'));
        if (_.isNil(database[this.path])) {
            database[this.path] = [];
        }
        database[this.path].push(joke);
        const data = JSON.stringify(database)
        fs.writeFileSync('database.json', data);
    }
}

module.exports = JokeSave;