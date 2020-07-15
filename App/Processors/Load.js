const _ = require('lodash');
const fs = require('fs');

class Load {
    path = 'store';
    getCommandName() {
        return '$load';
    }

    async respondToCommand(key) {
        const database = JSON.parse(fs.readFileSync('database.json'));
        return _.get(database, [this.path, key]);
    }
}

module.exports = Load;