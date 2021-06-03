const Discord = require("discord.js");
const bot = new Discord.Client();
const noswear = require("./antiswearing.js");

bot.login(process.env.token); //configuration

//here starts the code

const prefix = "r/"; //prefix to invocate a command of the bot

bot.on("message", (message) =>{

    if (message.content == prefix + "rick"){ //checks if the bot is online or not
        message.channel.send("Agli ordini!");
        
    }


    if (noswear.checkText(message.content) == true){
        message.channel.send("Evita di esprimerti in questo modo!! "+ message.author.toString());
    }


})


