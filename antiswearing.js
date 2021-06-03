// this file contains the code to avoid swearing in the server

const badwords = ["cazzo", "figa", "merda", "porco", "porca", "troia", "puttana"];

function checkText(message){

    for (var i = 0; i < badwords.length; i++){ //returns true if the message contains bad words
        if (message.toLowerCase() == badwords[i]){
            return true;
        } else {
            return false;
        }
    }

}


module.exports = { checkText };