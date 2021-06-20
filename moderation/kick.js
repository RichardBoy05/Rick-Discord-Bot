const mod_channel_id = "850329118914641951";
const prefix = "//";
const split = ":";

function kickUser(message){

    if (message.content.startsWith(prefix + "kick")){

        var user = message.mentions.members.first();
        var reason = message.substring(message.indexOf(split) + 1);

        if (reason == ""){
            message.channel.send("Aggiungi il motivo del kick!");
            return;
        }

        if (!message.member.hasPermission("KICK_MEMBERS")){
            message.channel.send("Non hai il permesso di esguire questo comando!");
            return;
        }

        if (!user){
            message.channel.send("Devi menzionare un utente per espellerlo!");
            return;
        }

        if(!user.kickable){
            message.channel.send("Il bot non ha il permesso di espellere questo utente!");
        }

        user.kick();
        message.channel.send("Comando eseguito!");
        mod_channel_id.send("L'utente " + user + " è stato kickato da " + message.author.toString() + "con la seguente motivazione: " + reason);





    }
}

module.exports = { kickUser }