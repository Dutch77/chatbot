const Save = require('./Save');
const fs = require('fs');
const _ = require('lodash');

class SaveJoke extends Save {
    path = 'jokes';

    getCommandName() {
        return '$saveJoke';
    }

    async respondToCommand(joke) {
        console.log(joke)
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

module.exports = SaveJoke;