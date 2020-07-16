const evalHelper = require('../Helpers/EvalHelper');

class Eval {
    getCommandName() {
        return '$eval';
    }

    getCommandDescription() {
        return `${this.getCommandName()} - evaluate expression ($eval 2 * Math.PI * 6368)`;
    }

    async respondToCommand(script) {
        return evalHelper(script);
    }
}

module.exports = Eval;