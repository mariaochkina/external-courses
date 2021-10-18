//task-05
let valueMax = 0;
let maxValue = function(array){
    for (let i = 1 ; i < array.length ; i++){
        if (array[i]>valueMax) {
            valueMax = array[i];
        }
    }
    return valueMax;
}    

module.exports = valueMax;
