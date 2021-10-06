var dog =  {
    name: 'Nord',
    size: 'small',
    breed: 'bedlington',
    age: 8
}

let actionsObject = function () {
    for (let value1 of Object.keys(dog)) {
        console.log(value1); // John, затем 30
    }
    for (let value2 of Object.values(dog)){
        console.log(value2)
    }
    return undefined;
}
actionsObject();

module.exports =actionsObject;