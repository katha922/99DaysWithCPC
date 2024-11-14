function load(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>display(data))
}
function display(data){
    const ul =document.getElementById('users-list');
    for(const user of data){
        console.log(user.email);
        const li =document.createElement('li');
        li.innerText=user.name;
        ul.appendChild(li);
    }
}