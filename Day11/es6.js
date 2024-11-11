const data=[{roll:1, name:'xyz',subject:'CSE'}];
console.log(data[0].name);

const products = {
    budget: 70000,
    data: [
        {id:1, name: 'hp', price:65000},
        {id:2, name: 'macbook', price: 200000},
    ]
}
console.log(products.budget);
console.log(products.data[0].name);

const information={
    id:1,
    name:'abc',
    BSC:{
        depertment:{
            dName:'cse',
            dName2:'EEE',
        },
        place:'dhaka'

    }
}

console.log(information.BSC.depertment.dName2);
//here "noHear" is not any element so to skip error we use (?)
console.log(information.BSC.depertment.noHear?.dName1);

//using map
const number=[10,12,15,17];
const double= number.map(num=>num*2)
console.log(double);

const price=[20,40,50];
const offer = price.map(offerPrice=>offerPrice-20);
console.log(offer);

//to find length

const friends=['abc','defg','ghij'];
const lengths = friends.map(frd=>frd.length);
console.log(lengths)
//to take 1st latter
const firstLetter = friends.map(friend=>friend[0]);
console.log(firstLetter);