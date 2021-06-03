// this file contains the code to avoid swearing in the server

const badwords = ["cazzo", "figa", "merda", "porco", "porca", "troia"];

async function warnsystem(){

    for (var i = 0; i < badwords.length; i++){
        if (message.content == badwords[i]){
            message.channel.send("Evita di esprimerti in questo modo!!");
        }
    }

}