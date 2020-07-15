const _ = require('lodash');
const fs = require('fs');

class Load {
    getCommandName() {
        return '$list';
    }

    async respondToCommand(command) {
        const database = JSON.parse(fs.readFileSync('database.json'));
        const store = _.get(database, ['store']);
        return Object.keys(store).join(', ');
    }
}

module.exports = Load;