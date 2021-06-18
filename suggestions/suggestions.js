const Discord = require("discord.js");
const prefix = "//";
const makesugg_id = "851438938044104724";
const allsugg_id = "851438971320795147";

function makeSuggestion(message, client) {
    

    if (message.content.startsWith(prefix + "suggest") && message.channel.id == makesugg_id){

        var suggestion = message.content.slice(10);

        if (suggestion == ""){
            client.channels.cache.get(makesugg_id).send("Inserisci un suggerimento valido!");
            return
        }

        var embed = new Discord.MessageEmbed()
        .setColor("#0000ff")
        .setTitle("💡 Suggestions by " + message.member.user.username)
        .setDescription(suggestion)
        .setThumbnail(message.member.user.avatarURL({ dynamic: true }));

        client.channels.cache.get(allsugg_id).send(embed)

        .then(msg => {
            msg.react("😍")
            msg.react("💩")
            var messageId = msg.id;

            embed
            .setFooter("Suggestion ID: " + messageId)

            msg.edit(embed)

            suggestions[messageId] = {
                suggerimento: contenuto,
                user: message.member.user.id,
                messageId: messageId,
                totVotiPos: [],
                totVotiNeg: []
            }
            

        })


    }
}





module.exports = { makeSuggestion };