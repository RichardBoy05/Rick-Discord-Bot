const Discord = require("discord.js");
const bot = new Discord.Client();
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

    if (message.content == "r/ciao"){ // checks if the bot is online or not
        message.channel.send("**Regole per una buona convivenza:** \n"+

       + "- No al linguaggio scurrile o aggressivo.\n"
       + "- Non siate sessisti, razzisti, volgari.\n"
       + "- Meglio non parlare di politica o religione.\n"
       + "- Sì alle discussioni animate, ma non litigate.\n"
       + "- Non parlate di attività illegali e non invitate all'investimento.\n"
       + "- Usate sempre il canale giusto per l'argomento di cui volete discutere.\n"
       + "- Rispettate i moderatori e gli amministratori.\n"
       + "- Non inserite links nei canali dedicati alle discussioni e non iniziate discussioni nei canali dedicati ai links.\n"
       + "- Evitate di spezzettare un messaggio.\n"
       + "- Non scrivete in maiuscolo, solo gli amministratori o i moderatori se necessario possono farlo.\n"
       + "- Non iniziate una nuova discussione se non si è conclusa la precedente.\n"
       + "- Nelle chat vocali non sovrapponete la vostra voce a quella degli altri, attendete che un utente concluda l'espressione di un concetto prima di intervenire.\n"
       + "- Siate gentili e cordiali con i nuovi entrati.\n"
       + "- Rispondete alle richieste di aiuto in chat.\n"
        
        +"_Buona permanenza!_  ~ **[OWNER] JustAPuzwick**")
        .then(msg => msg.react("✔️"));   
    }


})



bot.on("guildMemberAdd", (member) =>{ // triggers when someone joins the server
    bot.channels.cache.get("849212228716593152").send("Benvenuto nel server " + member.toString() +
    "\:smile: . Ti auguriamo una buona permanenza! Sei il membro numero " + member.guild.memberCount + "! \:heart:");
})



bot.on("guildMemberRemove", (member) =>{ // triggers when someone leaves the server
    bot.channels.cache.get("849212228716593152").send(member.toString()+" ha deciso di abbandonarci 😢 ...Che loser!");
})