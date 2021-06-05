const index = require("../index.js");

function clearChat(){

index.bot.on("message", (message) =>{

    if (message.content == prefix + "ciao"){ //checks if the bot is online or not
        message.channel.send("Funge!");
        
    }
})
}

module.exports = {clearChat};