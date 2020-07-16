const Cmd = require('./Cmd');
const CmdSave = require('./CmdSave');
const CmdList = require('./CmdList');
const CmdLoad = require('./CmdLoad');
const CmdDelete = require('./CmdDelete');
const Eval = require('./Eval');
const Help = require('./Help');
const Joke = require('./Joke');
const JokeSave = require('./JokeSave');
const Var = require('./Var');
const VarList = require('./VarList');
const VarSave = require('./VarSave');
const VarDelete = require('./VarDelete');

module.exports = [
    new Cmd(),
    new CmdSave(),
    new CmdList(),
    new CmdLoad(),
    new CmdDelete(),
    new Eval(),
    new Help(),
    new Joke(),
    new JokeSave(),
    new Var(),
    new VarList(),
    new VarSave(),
    new VarDelete(),
]