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


    if (noswear.checkText(message.content.toLowerCase()) == true){
        var warning_channel_id = bot.channels.cache.get("850329118914641951");
        message.delete();
        message.channel.send("La volgarità non è ammessa nel server!"+ message.author.toString());
        warning_channel_id.send(""+ message.author.toString()+" WARNING! L'utilizzo di termini volgari nel server può portati a venir mutato o bannato.\n Messaggio incriminato: '"+
        message.content+"'. /n Canale:");
        


    }


})


