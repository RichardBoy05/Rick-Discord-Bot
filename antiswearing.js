// this file contains the code to avoid swearing in the server

const Discord = require("discord.js");
const bot = new Discord.Client();
const badwords = ["cazzo", "figa", "merda", "porco", "porca", "troia", "puttana"];


function warnsystem(){

for (var i = 0; i < badwords.length; i++){ //check bad words in messages
    if (message.content == badwords[i]){
        message.channel.send("Evita di esprimerti in questo modo!! "+ message.author.toString());
    }
}
}


module.exports = { warnsystem };