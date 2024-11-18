//1.how to declare a variable using let and constant
const fixed = 'name';
let notFixed= 'season';
notFixed='winter';

//2.conditions

if(fixed==='name'||notFixed==='summer'){
    console.log('done')
}
else{
    console.log('not done');
}

//3.array
//index,length,push
const numbers = [5,20,30,60];
numbers[0]=6; //using set number by using index

//4. for loop
for(let i=0;i<numbers.length;i++){
    const number = numbers[i];
    console.log(number);
}

//5.function
function multi(num1,num2){
    const result=num1*num2;
    return result;
}
const output =multi(2,2);
console.log(output);

//6.object
//access property by name
const student = {
    name:'xyz',
    roll: 22,
    subject:['math','biology','english']
}
const variable='subject';
console.log(student.roll);
console.log(student['name']);
console.log(student[variable]);
