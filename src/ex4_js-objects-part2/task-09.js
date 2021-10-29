function insertLine (string1, string2, index){
    const arrWords = string1.split('');
    return arrWords.splice(index+1,0,string2).join('');
}

module.exports = insertLine;