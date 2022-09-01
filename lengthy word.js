function longestWord(str){
    return str.match(/[a-zA-Z]+/g)
               .reduce(function(word1,word2){
                    return word1.length>=word2.length?word1:word2;
               })
}
console.log(longestWord("abc12&bd3&+@))hjskf"));
console.log(longestWord("Hi!, this is Eve"));