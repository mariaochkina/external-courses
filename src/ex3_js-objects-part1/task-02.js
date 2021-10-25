var dog =  {
    name: 'Nord',
    size: 'small',
    breed: 'bedlington',
    age: 8
}

let actionsObject = function () {
    for (let [key, value] of Object.entries(dog)) {
        console.log(`${key}: ${value}`); 
    }
    return;
}

module.exports = actionsObject;
