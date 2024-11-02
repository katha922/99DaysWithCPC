//option-1
const makeRedButton = document.getElementById("btn");
makeRedButton.onclick=makeRed;
function makeRed(){
    document.body.style.backgroundColor='red'
}
//option-2
function makeBlue(){
    document.body.style.backgroundColor='blue'
}
//option-3
const greenButton = document.getElementById('make-green');
greenButton.onclick=function makeGreen(){
    document.body.style.backgroundColor='green'
}
//option-4
const purpleButton = document.getElementById('make-purple');
purpleButton.addEventListener('click', function makePurple(){
    document.body.style.backgroundColor= 'purple'
})
//option-5 important
document.getElementById('make-orange').addEventListener('click',function(){
    document.body.style.backgroundColor='orange';
})