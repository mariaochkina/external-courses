//task-01
let typeArgument = function(str){
    if (String(str) === "NaN"){
        console.log("type =", undefined, ", value =", str);
    } else {
      console.log("type =", typeof str, ", value =", str);
    }
    return str;
}

module.exports = typeArgument;
