console.log(1);
console.log(2);
console.log(3);
call();
//setTimeout do not work sequencial
setTimeout(call);
//we can declare time in mili sec how much wait
setTimeout(call,4000);
console.log(5);

function call(){
    console.log(4);
}