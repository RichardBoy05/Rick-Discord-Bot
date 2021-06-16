
async function addedReaction(user, messageReaction) {

    if (user.bot) return
    if (messageReaction.message.partial) await messageReaction.message.fetch();

    if (messageReaction.message.id == ("852199373667303494")) {

        var member = messageReaction.message.guild.members.cache.find(x => x.id == user.id);
        member.roles.add("850718041901105163");
    }
}



async function removedReaction(user, messageReaction) {

    if (user.bot) return
    if (messageReaction.message.partial) await messageReaction.message.fetch();

    if (messageReaction.message.id == ("852199373667303494")) {

        var member = messageReaction.message.guild.members.cache.find(x => x.id == user.id);
        member.roles.remove("850718041901105163");

    }
}


module.exports = { addedReaction, removedReaction }