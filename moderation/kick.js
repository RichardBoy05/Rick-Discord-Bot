const mod_channel_id = "850329118914641951";
const prefix = "//";
const split = ':';

function kickUser(message, client) {

    if (message.content.startsWith(prefix + "kick")) {

        var user = message.mentions.members.first();

        if (!message.member.hasPermission("KICK_MEMBERS")) {
            message.channel.send("Non hai il permesso di eseguire questo comando!");
            return;
        }

        if (!user) {
            message.channel.send("Devi menzionare un utente per espellerlo!");
            return;
        }

        if (!user.kickable) {
            message.channel.send("Il bot non ha il permesso di espellere questo utente!");
            return;
        }

        if (message.toString().indexOf(split) == -1) {
            message.channel.send("Errore nella sintassi del messaggio (//kick @user : [motivo])");
            return;
        }

        var reason = message.toString().substring(message.toString().indexOf(split) + 1, message.toString().length);

        if (reason == "") {
            message.channel.send("Aggiungi il motivo del kick!");
            return;
        }

        message.channel.send("Comando eseguito!");

        var mod_channel = client.channels.cache.get(mod_channel_id);
        mod_channel.send("L'utente " + user.toString() + " è stato kickato da " + message.author.toString() + " con la seguente motivazione: '" + reason + "'.");

        user.kick();


    }
}

module.exports = { kickUser }