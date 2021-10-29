var person = {};
person.age = 18;
person.name='jake';
person.gender='male';
console.log(person);
delete person.name;
console.log(person);

module.exports=person;
