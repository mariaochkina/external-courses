function upperCaseFirst (str){
let result ="";
  for(let i = 0; i < length(str); i++) {
    const uppCase = str[i] !== " " && (i === 0 || str[i - 1] === " ");
    result += uppCase ? toUpperCase(str[i]) : str[i];
  }
  return result;
}

module.exports = upperCaseFirst;