const Load = require('./Load');
const Save = require('./Save');
const List = require('./List');
const Joke = require('./Joke');
const SaveJoke = require('./SaveJoke');
const CommandList = require('./CommandList');
const Eval = require('./Eval');
const SaveCmd = require('./SaveCmd');
const Cmd = require('./Cmd');

module.exports = [
    new Load(),
    new Save(),
    new List(),
    new Joke(),
    new SaveJoke(),
    new CommandList(),
    new Eval(),
    new SaveCmd(),
    new Cmd(),
]