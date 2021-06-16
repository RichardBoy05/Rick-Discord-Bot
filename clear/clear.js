const prefix = "//"; // the prefix to execute every command of this bot

function clearChat(data) {

    if (data.content.startsWith(index.prefix + "clear")) {
        if (!(data.member.roles.cache.has("849207774541250590"))) {
            data.channel.send("Non hai il permesso di eseguire questo comando!");
            return
        }

        var count = data.content.slice(8);
        count = parseInt(count);

        if (!count) {
            data.channel.send("Inserisci un numero valido!");
            return
        }

        if (count > 100) {
            data.channel.send("Puoi eliminare al massimo 100 messaggi alla volta!");
            return
        }

        data.channel.bulkDelete(count + 1, true);
        data.channel.send("Ho eliminato " + count + " messaggi!")
            .then(msg => {
                msg.delete({ timeout: 3000 })
            })

    }

}

module.exports = { clearChat };