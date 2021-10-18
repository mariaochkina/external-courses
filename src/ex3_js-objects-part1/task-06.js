const dog =  {
    name: 'Nord',
    size: 'small',
    breed: 'bedlington',
    age: 8
}

const refTodog = dog;
const animal = deepClone(dog);
function deepClone(obj){
    const clObj = {};
    for (const i in obj){
        if (obj[i] instanceof Object){
            clObj[i] = deepClone(obj[i]);
            continue;
        }
        clObj[i]=obj[i];
    }
    return clObj;
}  

module.exports = deepClone;