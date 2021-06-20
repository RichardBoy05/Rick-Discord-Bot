const mod_channel_id = "850329118914641951";
const prefix = "//";

function kickUser(message){

    if (message.content.startsWith(prefix + "kick")){

        var user = message.mentions.members.first();

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



    }
}

module.exports = { kickUser }