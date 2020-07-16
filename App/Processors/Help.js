const _ = require('lodash');
const fs = require('fs');

class Help {
    getCommandName() {
        return '$help';
    }

    getCommandDescription() {
        return `${this.getCommandName()} - help`
    }

    async respondToCommand() {
        const processors = require('./index');
        return _.chain(processors)
            .map((processor) => processor.getCommandDescription() || processor.getCommandName())
            .join('\n')
            .value();
    }
}

module.exports = Help;