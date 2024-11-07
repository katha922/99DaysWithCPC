// normal function
const add=function(a,b){
    return a+b;
}

//arrow function
const add2 = (a,b)=>a+b;

const sum = add2(10,20);

const getName=(person)=>person.name;
const student = { name: 'kotha',age:20}
const name=getName(name);

const getFirst = numbers=>numbers[0];
const first = getFirst([1,2,3,4,5])
console.log(first)

//for large arrow function. for this type large functiuon we need to use return keyword
const math=(x,y,z)=>{
    const sum=x+y+z;
    const mult=x*y*z;
    const result = sum+mult
    return result
}