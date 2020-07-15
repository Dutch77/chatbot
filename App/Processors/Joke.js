const _ = require('lodash');
const fs = require('fs');

class Joke {
    path = 'jokes';
    getCommandName() {
        return '$joke';
    }

    async respondToCommand() {
        const database = JSON.parse(fs.readFileSync('database.json'));
        const jokes =  _.get(database, [this.path], []);
        if (jokes.length === 0) {
            return;
        }

        return jokes[Math.floor(Math.random() * jokes.length)];
    }
}

module.exports = Joke;