function lowelCamelCase (string){
    let str = string.toLowerCase();
    let newstr = str.split('');
    let words = [];

    words[0] = newstr[0][0].toLowerCase() + newstr[0].substring(1);
  for (let i = 1; i < newstr.length; i += 1) {
    for (let j = 0; j < newstr[i].length; j += 1) {
      words[i] = newstr[i][0].toUpperCase() + newstr[i].substring(1);
    }
  }
  str = words.join('');
  return str;
}

module.exports = lowelCamelCase;