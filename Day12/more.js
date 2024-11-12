const number =[1,2,3,4,5];
const result= number.forEach(n=>console.log(n));
console.log(result);

//filter based on condition

const find = number.filter(p=>p>2);
console.log(find);

const name=['xyz','abcd','egg'];
const selected=name.filter(names=>names.length>3);
console.log(selected);

//find
const selected2 = number.find(num=>num>2);
console.log(selected2);

//reduce
const total = number.reduce((previous,current)=>previous+current,0)
console.log(total);

//array of object
const products=[
    {id:1,name:'hp',price:70000},
    {id:2,name:'dell',price:60000},
    {id:3,name:'lenovo',price:80000},
]
//map
const productNames= products.map(product=>product.name);
console.log(productNames);
const prices = products.map(p=>p.price);
console.log(prices)

//forEach
products.forEach(p=>console.log(p.id));

//filter
const expensive = products.filter(p=>p.price>60000);
console.log(expensive)

//find
const affordable = products.find(p=>p.price>60000);
console.log(affordable);

//reduce
const totalPrice=products.reduce((accum,current)=>accum+current.price,0)
console.log(totalPrice)