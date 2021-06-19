const Discord = require("discord.js");
const { checkText } = require("../antiswearing/antiswearing");
const prefix = "//";
const channel_id = "851438938044104724";


function suggOrChall(message) {

    if (message.content.startsWith(prefix + "suggest") && message.channel.id == channel_id) {

        var suggestion = message.content.slice(10);
        if (suggestion == "") {

            message.channel.send("Inserisci un suggerimento valido!")
                .then(msg => {
                    msg.delete({ timeout: 3000 })
                })
            message.delete({ timeout: 3000 });

            return
        }

        if (checkText(suggestion) == true) {
            message.delete();

            return
        }

        createEmbed(message, suggestion, true);
        message.delete();

        return
    }

    // suggestions

    if (message.content.startsWith(prefix + "challenge") && message.channel.id == channel_id) {

        var challenge = message.content.slice(12);
        if (challenge == "") {

            message.channel.send("Inserisci una challenge valida!")
                .then(msg => {
                    msg.delete({ timeout: 3000 })
                })
            message.delete({ timeout: 3000 });

            return
        }

        if (checkText(challenge) == true) {
            message.delete();

            return
        }

        createEmbed(message, challenge, false);
        message.delete();
        return

    } else {

        if (!message.member.roles.cache.has("849207774541250590") && !message.member.roles.cache.has("849234240284655626")) {
            message.delete();
            message.channel.send("Utilizza il canale solo per proporre suggerimenti o challenge con gli specifici comandi //suggest[suggerimento] e //challenge [challenge]")
                .then(msg => {
                    msg.delete({ timeout: 10000 })
                })
        }

    }

    //challenges

}



function createEmbed(message, data, isSugg) {

    var embed = new Discord.MessageEmbed() // creating the embed message

        .setThumbnail(message.member.user.avatarURL({ dynamic: true }))
        .setDescription(data)
        .setFooter("Suggest");

    isSugg == true ? embed.setColor("#07D3F8")
        .setTitle("💡 Suggerimento di " + message.member.user.username) : embed.setColor("#F87807")
            .setTitle("💪 Challenge di " + message.member.user.username);

    message.channel.send(embed)
        .then(msg => {
            msg.react("👍")
            msg.react("👎")
            var messageId = msg.id;

            isSugg == true ? embed.setFooter("Suggestion ID: " + messageId).setTimestamp() : embed.setFooter("Challenge ID: " + messageId).setTimestamp();

            msg.edit(embed)

        })

}



module.exports = { suggOrChall };