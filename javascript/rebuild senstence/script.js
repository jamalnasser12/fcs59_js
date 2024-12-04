function rebuild_sentence(words, lengths) {
    let result = "";
    for (let i = 0; i < words.length; i++) {
        let tWord = words[i].slice(0, lengths[i]);
        if (i > 0) {
            result += " ";
        }
        result += tWord;
    }
    return result;
}
console.log(rebuild_sentence([ "the", "sky", "is", "blue" ], [ 3, 2, 2, 1 ]));  
