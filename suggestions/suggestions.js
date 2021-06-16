const prefix = "//";
const makesugg_id = "851438938044104724";
const allsugg_id = "851438971320795147";

function makeSuggestion(message, bot) {

    if (message.content.startsWith == prefix + "suggest" && message.channel.id == makesugg_id){

        var suggestion = message.content.slice(10);
        var embed = new Discord.MessageEmbed();

        bot.channels.cache.get(allsugg_id).send(embed);

    }


}


module.exports = { makeSuggestion };