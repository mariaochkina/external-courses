function invertLine (string){
    let array = [...string];
    newstring = array.reverse().join('');
    return newstring;
}

module.exports =invertLine;