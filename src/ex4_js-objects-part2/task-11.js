function countRepeatChar (string){
    const result = [];
  
    for (let i = 0; i < string.length; i++) {
      if (!result[string[i]]) result[string[i]] = 0;
      result[string[i]]++;
    }
  
    console.log(result);
}

module.exports = countRepeatChar;