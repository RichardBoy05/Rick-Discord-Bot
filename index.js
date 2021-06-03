const Discord = require("discord.js");
const bot = new Discord.Client();

var token = 'ODQ5OTQxMDI2MzQ4NzI4MzUw.YLifQw.EujYOv5mRfJa7zdwZAwo_v_leMk';

bot.login(process.env.token); //configuration

//here starts the code

bot.on("message", (message) =>{

    if (message.content == '!rick'){
        message.channel.send("Present!");
    }

})


