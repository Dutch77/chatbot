const evalHelper = require('../Helpers/EvalHelper');

class Eval {
    getCommandName() {
        return '$eval';
    }

    async respondToCommand(script) {
        return evalHelper(script);
    }
}

module.exports = Eval;