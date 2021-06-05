
function clearChat(data){
    if (data.content == "r/ciao"){ //checks if the bot is online or not
        data.channel.send("Funge!");
        
    }
}

module.exports = {clearChat};