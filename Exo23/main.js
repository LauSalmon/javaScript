const mail = document.querySelector("#email");
const pw = document.querySelector("#password");
const button = document.querySelector("#bt");

let regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let regexPassword = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{12,20}$/;



mail.addEventListener("keyup", function (){
    let email = mail.value;
    let mailValid = regexEmail.test(email);
    if (mailValid == true) {
        mail.style.backgroundColor = "green";
    } else {
        mail.style.backgroundColor = "red";
    }
});
pw.addEventListener("blur", function(){
    let pW = pw.value;
    let pwValid = regexPassword.test(pW);
    if (pwValid == true) {
        pw.style.backgroundColor = "green";
    } else {
        pw.style.backgroundColor = "red";
    }
});



