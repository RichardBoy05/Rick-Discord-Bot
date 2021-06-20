const Discord = require("discord.js");
const bot = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });
const noswear = require("./antiswearing/antiswearing.js");
const clear = require("./clear/clear.js");
const rules = require("./rules/rules.js");
const community = require("./community/community.js");
const mute = require("./moderation/mute.js");
const kick = require("./moderation/kick.js");
const ban = require("./moderation/ban.js"); 

const prefix = "//"; // the prefix to execute every command of this bot

bot.login(process.env.token); //configuration

//here starts the code

bot.on("message", (message) => {

    if (message.content == prefix + "rick") { // checks if the bot is online or not
        message.channel.send("Agli ordini!");
    }

    noswear.warnsystem(message, bot); // censure bad words and warns users who used them

    clear.clearChat(message); // command to remove a certain amount of messages in a channel (r/clear)

    community.suggOrChall(message); // command to add a suggestion or a challenge for the server or for JustAPuzwick's Yt Channel

    kick.kickUser(message); // kicka un utente col il comando //kick @utente [motivo]


})





bot.on("guildMemberAdd", (member) => { // triggers when someone joins the server
    bot.channels.cache.get("849212228716593152").send("Benvenuto nel server " + member.toString() +
        "\:smile: . Ti auguriamo una buona permanenza! Sei il membro numero " + member.guild.memberCount + "! \:heart:");
})





bot.on("guildMemberRemove", (member) => { // triggers when someone leaves the server
    bot.channels.cache.get("849212228716593152").send(member.toString() + " ha deciso di abbandonarci 😢 ...Che loser!");
})





bot.on("messageReactionAdd", async function (messageReaction, user) {

    rules.addedReaction(user, messageReaction);

});





bot.on("messageReactionRemove", async function (messageReaction, user) {

    rules.removedReaction(user, messageReaction);

});