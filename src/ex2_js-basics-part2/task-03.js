//task-03
let numberEvenOdd = function(array){
    let countEven = 0;
    let countOdd = 0;
    let countZero = 0;
    for (i = 0; i < array.length; i++) {
        if ((arr[i] % 2 == 0) && (array[i] != 0)) {
            countEven++;
        }
        else if (array[i] % 2 == 1) {
            countOdd++;
        }
        else if (array[i] == 0) {
            countZero++;
        }
    }    
    console.log(countEven, countOdd, countZero);
}    

module.exports = numberEvenOdd;
