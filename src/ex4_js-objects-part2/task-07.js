function addSymbol (string, number){
    let newstring;
    if ((string.length) > number ){
        newstring = string.slice(0, length - 1);
        newstring += "...";
    }
    return newstring;
}

module.exports = addSymbol;