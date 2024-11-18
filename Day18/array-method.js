const products=[
    {name:'laptop',price:40000,brand:'hp',color:'silver'},
    {name:'pc',price:50000,brand:'lenovo',color:'white'},
    {name:'phone',price:30000,brand:'iphone',color:'black'}
];
//map (return)
const brands = products.map(product=>product.brand);
console.log(brands);
//forEach(no return)
products.forEach(product=>console.log(product.color));

//filter
const cost = products.filter(product=>product.price<=40000);
console.log(cost);

const specificName = products.filter(p=>p.name.includes('l'));
console.log(specificName);

//find
const cost2 = products.find(product=>product.price<=40000);
console.log(cost2);