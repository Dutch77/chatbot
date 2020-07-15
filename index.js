const App = require('./App/App');

const app = new App();
app.listen();

// const login = require("facebook-chat-api");
// const {email, password} = require('./config.json');
//
// // Create simple echo bot
// login({email: email, password: password}, (err, api) => {
//     if(err) return console.error(err);
//
//     api.listenMqtt((err, message) => {
//         console.log(message)
//         api.sendMessage(message.body, message.threadID);
//     });
// });