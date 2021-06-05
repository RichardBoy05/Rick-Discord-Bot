// this file contains the code to avoid swearing in the server

const badwords = ["cazzo", "figa", "fica", "merda", "porco", "porca", "troia", "puttana", "vaffanculo", "bastardo", "bastarda", "zoccola",
"negro", "coglione", "coglioni", "ricchione", "minchia", "mignotta", "frocio", "finocchio", "ditalino", "stronzo", "stronza", "ano", "vagina"]; //list of bad words




function checkText(message){
    var words = countWords(message);

    for (var i = 0; i < words.length; i++){
        for (var f = 0; f < badwords.length; f++){
            if (words[i] == badwords[f]){
                return true; // if there's a bad word
        }
    }
}
    return false; // if there isn't  a bad word
}




function countWords(revtext){ // returns an array of the different words of the message

    var result = [];    
    var text = revtext;  
    var spacePos = 0;
    
    while (spacePos != -1){     
      spacePos = text.indexOf(" ");
      result.push(text.substring(0,spacePos));
      text = text.substring(spacePos+1, text.length);    
    }

    result.splice(result.length - 1);
    result.push(text);
    
    return result;
  }



  
function warnsystem(data, bot){

    if ((checkText(data.content.toLowerCase()) == true) && data.channel.name != "warnings-bans"){ //check the content of the message and compare it to a list
        // of bad words 

    var warning_channel_id = bot.channels.cache.get("850329118914641951"); // id of the warning-bans channel



    var options = {'weekday': 'long', 'month': '2-digit', 'day': '2-digit'}; //defines the structure of the date
    var date = new Date(); //gets the date
    var dateString = date.toLocaleString('it-IT', options)+ "/" + date.getFullYear() + " alle ore " +
    + date.getHours() + ":" + (date.getMinutes()<10?"0":"") + date.getMinutes(); //builds the string of the date



    data.delete(); //delete the bad message
    data.channel.send("La volgarità non è ammessa nel server!"+ data.author.toString()); //replaces the bad message
    warning_channel_id.send(data.author.toString()+" WARNING! L'utilizzo di termini volgari nel server può portarti"+ //sends the warning to the warnings-bans channel
    " a venir mutato o bannato.\n Messaggio incriminato: '"+
    data.content+"';\n Canale: '"+
    data.channel.name+"';\n Data: "+
    dateString+".");


    }

}


module.exports = { warnsystem };


     
