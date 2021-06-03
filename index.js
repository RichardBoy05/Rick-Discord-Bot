const Discord = require("discord.js");
const bot = new Discord.Client();

var token = 'ODQ5OTQxMDI2MzQ4NzI4MzUw.YLifQw.EujYOv5mRfJa7zdwZAwo_v_leMk';

bot.login(process.env.token); //configuration

//here starts the code

bot.on("message", (message) =>{

    if (message.content == '!rick'){
<<<<<<< HEAD
        message.channel.send("Ci sono!");
=======
        message.channel.send("Present!");
>>>>>>> a8a297fa868a8cdfda96b481caad11052645a65c
    }

})


