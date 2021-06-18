const Discord = require("discord.js");
const prefix = "//";
const channel_id = "851438938044104724";


function suggOrChall(message, client) {

    if (message.content.startsWith(prefix + "suggest") && message.channel.id == channel_id) {

        var suggestion = message.content.slice(10);
        if (suggestion == "") {

            client.channels.cache.get(channel_id).send("Inserisci un suggerimento valido!")
            .then(msg => {
                msg.delete({ timeout: 3000 })})
                message.delete({ timeout: 3000 });

            return        
        }

        createEmbed(message, suggestion, client, true);
        message.delete();
        return
    }

    // suggestions

    if (message.content.startsWith(prefix + "challenge") && message.channel.id == channel_id) {

        var challenge = message.content.slice(12);
        if (challenge == "") {

            client.channels.cache.get(channel_id).send("Inserisci una challenge valida!")
            .then(msg => {
                msg.delete({ timeout: 3000 })})
                message.delete({ timeout: 3000 });

            return
        }

        createEmbed(message, challenge, client, false);
        message.delete();
        return

    }

    //challenges

}



function createEmbed(message, data, client, isSugg) {

    var embed = new Discord.MessageEmbed() // creating the embed message
    .setTitle("💡 Suggerimento di " + message.member.user.username)
    .setThumbnail(message.member.user.avatarURL({ dynamic: true }));
    isSugg == true ? embed.setColor("#07D3F8") : embed.setColor("#F87807");

    client.channels.cache.get(channel_id).send(embed);

}





module.exports = { suggOrChall };