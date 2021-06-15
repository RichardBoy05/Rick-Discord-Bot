const Discord = require("discord.js");
const bot = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });
const noswear = require("./antiswearing/antiswearing.js");
const clear = require("./clear/clear.js");


bot.login(process.env.token); //configuration

//here starts the code

bot.on("message", (message) =>{

    if (message.content == "r/rick"){ // checks if the bot is online or not
        message.channel.send("Agli ordini!");    
    }

    noswear.warnsystem(message, bot); // censure bad words and warns users who used them

    clear.clearChat(message); // command to remove a certain amount of messages in a channel (r/clear)

    if(message.content.startsWith("|")){
        message.react("✅");
        }

})



bot.on("guildMemberAdd", (member) =>{ // triggers when someone joins the server
    bot.channels.cache.get("849212228716593152").send("Benvenuto nel server " + member.toString() +
    "\:smile: . Ti auguriamo una buona permanenza! Sei il membro numero " + member.guild.memberCount + "! \:heart:");
})



bot.on("guildMemberRemove", (member) =>{ // triggers when someone leaves the server
    bot.channels.cache.get("849212228716593152").send(member.toString()+" ha deciso di abbandonarci 😢 ...Che loser!");
})



bot.on("messageReactionAdd", async function(messageReaction, user){

    if(user.bot) return
    if (messageReaction.message.partial) await messageReaction.message.fetch();

        if(messageReaction.message.id == ("852199373667303494")){

            var member = messageReaction.message.guild.members.cache.find(x => x.id == user.id);
            member.roles.add("850718041901105163");
        }
   
});

bot.on("messageReactionRemove", async function(messageReaction, user){

    if(user.bot) return
    if (messageReaction.message.partial) await messageReaction.message.fetch();

        if(messageReaction.message.id == ("852199373667303494")){

            var member = messageReaction.message.guild.members.cache.find(x => x.id == user.id);
            member.roles.remove("850718041901105163");
   
}
    //

    
    

});
