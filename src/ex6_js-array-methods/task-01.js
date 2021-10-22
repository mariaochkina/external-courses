function analogSlice (array, begin = 0, end = array.length){
    const result = [];
    let first = begin;
    let last = end;

    if (begin > end){
        return result;
    }

    if (end  < 0){
        last = end + array.length;
    }

    if (begin < 0){
        first = -array.length ? 0 : array.length + first;
    }

    if (last > array.length){
        end = array.length;
    }
    
    for (let i = 0; i < last; i++){
        result.push(array[i]);
    }

    return result;
}

module.exports = analogSlice;
