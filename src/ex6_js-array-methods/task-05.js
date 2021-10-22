function analogMap (array, callback){
    const newarray = [];

    for (let i = 0; i < array.length; i++){
        newarray.push(callback(array[i],i,array));
    }

    return newarray;
}

module.exports = analogMap;
