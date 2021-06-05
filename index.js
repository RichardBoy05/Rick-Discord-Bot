const Discord = require("discord.js");
const bot = new Discord.Client();
const noswear = require("./antiswearing/antiswearing.js");
const clear = require("./clear/clear.js");


bot.login(process.env.token); //configuration

//here starts the code

bot.on("message", (message) =>{

    if (message.content == "r/rick"){ //checks if the bot is online or not
        message.channel.send("Agli ordini!");
        
    }


    /////////////////////////////////////////////


    

    noswear.warnsystem(message, bot);


    clear.clearChat(message);

    

    

    /////////////////////////////////////////////






})


