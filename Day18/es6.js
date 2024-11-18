const numbers2 = [5,20,30,60];
const student2 = {
    name:'xyz',
    roll: 22,
    subject:['math','biology','english']
}

//1.template string
const about = `student name is ${student2.name} roll number is ${student2.roll} number is ${numbers2[1]} subject is ${student2.subject[0]}`;
console.log(about);

//2.arrow function
const noPera =()=>10;
const onePera=num=>num+10;
const isEven=x=>x%2==0;
const multiPera=(x,y,z)=>x+y+z;
const multiLine=(num1,num2)=>{
    const sum=num1+num2;
    return sum;
}

//spread operator
const addNum=[...numbers2];
numbers2.push(40);
console.log(addNum);
console.log(numbers2);
const moreAdd=[...numbers2,90];
console.log(moreAdd);