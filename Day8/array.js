const numbers=[2,3,5,6,8,7];
const arrayMax= Math.max(numbers); //here our output is NaN
const arrayMax2=Math.max(...numbers) //when we use spread operator(...) then our output is 8
console.log(arrayMax)
console.log(arrayMax2)

//using spread operator to copy

const numbers2=[1,4,9,3,2];
const numbers3=numbers2;
numbers3.push(15);
//2ta tei refference dhore rakhe and output same hoy
console.log(numbers3)
console.log(numbers2)

//reffence na dhore rakhar jonno spread operator use kora hoy

const nums=[5,3,8,2,9];
const nums2=[...nums];
nums2.push(0);
console.log(nums)
console.log(nums2)

//advance (for push)
const nums3= [...nums,4];
console.log(nums3);