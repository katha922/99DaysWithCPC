const student = {
    name: 'x',
    roll:1,
    isStudent: true,
}
//if we want to keys name
const keys = Object.keys(student);
console.log(keys)
//if we want value name
const values = Object.values(student);
console.log(values);
//if we want the output pair thats mean keys and value
const pair = Object.entries(student);
console.log(pair);
//to delete from object
delete student.isStudent;
console.log(student);
//another delete
const {name, ...deleteName} = student;
console.log(deleteName);

const sentence = 'it is a sentence';
for(const char of sentence){
    console.log(char);
}
//but for of amra object er khetre use korte parbona. object er jonno for in use korte hobe
for(const key in student){
    const value = student[key];
    console.log(key,value)
}
//for of use korar jonno amra 1st a objuect ta k array banay felte pari
const key = Object.keys(student);
console.log(key); //object array hoye gese
//now we can use for of
for(const keys2 of keys){
    const value = student[keys2]; // ata variable . property name na tai dot(.) use kora jabena
    console.log(keys2,value)
}
