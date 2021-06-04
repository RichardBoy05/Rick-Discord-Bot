// this file contains the code to avoid swearing in the server

const badwords = ["cazzo", "figa", "fica", "merda", "porco", "porca", "troia", "puttana", "vaffanculo", "bastardo", "bastarda", "zoccola", "negro", "coglione", "ricchione", "minchia", "mignotta", "frocio", "finocchio", "ditalino", "stronzo", "stronza", "ano", "vagina"];

function checkText(message){


    var words = countWords(message);

    for (var i = 0; i < words.length; i++){
        for (var f = 0; f < badwords.length; f++){
            if (words[i] == badwords[f]){
                return true;
        }
    }
}

    return false;

}



function countWords(revtext){ // returns an array which contains the words of the message
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


module.exports = { checkText };