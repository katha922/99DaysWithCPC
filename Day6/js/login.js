//step-1: add click event handler with submit button
document.getElementById('btn-submit').addEventListener('click',function(){
    //step-2: get the email address inside the email input field
    //always remember to use .value to get text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    //step-3:get the password
    const passField = document.getElementById('user-pass');
    const pass = passField.value;
    console.log(email,pass);
})