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
    fetch("http://rable.duckdns.org/auth/login/",{
        method: "POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
    .then(res=>{
        if(res.status == 200){
            alert("로그인 성공");
        }else return res.json();
    })
    .then((res) => {
        alert(res.detail);
    })

    
}