
function clearChat(data){
    
    if(data.content.startsWith == ("r/clear")){
        if(!(data.member.roles.cache.has("849207774541250590"))){
            data.channel.send("Non hai il permesso di eseguire questo comando!");
            return
        }

        var count = data.content.slice(7);
        count = count.parseInt();

        if(!count){
            data.channel.send("Inserisci un numero valido!");
        }

        data.channel.bulkDelete(count, true);
        data.channel.send("Ho eliminato " + count + " messaggi!")
        .then(msg =>{
            msg.delete({timeout:3000})
        })


        

    }

}

module.exports = {clearChat};