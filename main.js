//const env = require('dotenv')
const id = document.querySelector("#id"),
    psword = document.querySelector("#password"),
    loginBt = document.querySelector("#login-bt");

    loginBt.addEventListener("click",login);

function login(){
    const req = {
        id: id.value,
        psword: psword.value,
    };

    const xhr = new XMLHttpRequest();
    xhr.open('GET','https://google.com');
    xhr.send();
}