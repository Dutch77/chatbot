const _ = require('lodash');
const axios = require('axios');
const safeEval = require('safe-eval')

const eval = async function(script, parameters) {
    try {
        script = `(async (parameters) => eval(\`${script}\`))(${parameters})`;
        const result = await safeEval(script, {_, axios});
        return `${result}`;
    } catch (e) {
        return `Error: ${e.message}`
    }
}

module.exports = eval;
