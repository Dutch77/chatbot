const apiLogin = require("facebook-chat-api");

const login = ({email: email, password: password}) => new Promise((resolve, reject) => {
    return apiLogin({email: email, password: password}, (error, api) => {
        if (error) {
            reject(error);
        } else {
            resolve(api);
        }
    })
})

module.exports = login;