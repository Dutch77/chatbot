const _ = require('lodash');
const fs = require('fs');

class CommandList {
    getCommandName() {
        return '$commands';
    }

    async respondToCommand(command) {
        const processors = require('./index');
        return _.chain(processors)
            .map((processor) => processor.getCommandName())
            .join(', ')
            .value();
    }
}

module.exports = CommandList;