
function clearChat(command){
    if (command.content == "r/ciao"){ //checks if the bot is online or not
        command.channel.send("Agli ordini!");
        
    }
}

module.exports = {clearChat};