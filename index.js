const Discord = require("discord.js");
const bot = new Discord.Client();
const noswear = require("./antiswearing/antiswearing.js");

bot.login(process.env.token); //configuration

//here starts the code

const prefix = "r/"; //prefix to invocate a command of the bot

bot.on("message", (message) =>{

    if (message.content == prefix + "rick"){ //checks if the bot is online or not
        message.channel.send("Agli ordini!");
        
    }


    if ((noswear.checkText(message.content.toLowerCase()) == true) && message.channel.name != "warnings-bans"){ //check the content of the message and compare it to a list
                                                                                                                // of bad words 
        
        var warning_channel_id = bot.channels.cache.get("850329118914641951"); // id of the warning-bans channel

        
        
        var options = {'weekday': 'long', 'month': '2-digit', 'day': '2-digit'}; //defines the structure of the date
        var date = new Date(); //gets the date
        var dateString = date.toLocaleString('it-IT', options)+ "/" + date.getFullYear() + " alle ore " +
        + date.getHours() + ":" + (date.getMinutes()<10?"0":"") + date.getMinutes(); //builds the string of the date
        
        
        
        message.delete(); //delete the bad message
        message.channel.send("La volgarità non è ammessa nel server!"+ message.author.toString()); //replaces the bad message
        warning_channel_id.send(message.author.toString()+" WARNING! L'utilizzo di termini volgari nel server può portarti"+ //sends the warning to the warnings-bans channel
        " a venir mutato o bannato.\n Messaggio incriminato: '"+
        message.content+"';\n Canale: '"+
        message.channel.name+"';\n Data: "+
        dateString+".");
        


    }


})


