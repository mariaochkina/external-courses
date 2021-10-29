var dog =  {
    name: 'Nord',
    size: 'small',
    breed: 'bedlington',
    age: 8
}
function deepClone(){
    const clone = JSON.parse(JSON.stringify(dog));
    console.log(clone);
}    
deepClone();

module.exports = deepClone;