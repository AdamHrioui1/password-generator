const showPwd = document.getElementById("showPwd");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numberEl = document.getElementById("number");
const symboleEl = document.getElementById("symbole");
const getPwdBtn = document.getElementById("getPwd");
const length = document.getElementById("length");
const copy = document.getElementById("copy");

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbole = "&é'()}[]{}#~'@^\=-è_çà";

function getUppercase() {
    return uppercase[Math.floor(Math.random() * uppercase.length)];
}
function getLowercase() {
    return lowercase[Math.floor(Math.random() * lowercase.length)];
}
function getNumber() {
    return number[Math.floor(Math.random() * number.length)];
}
function getSymbole() {
    return symbole[Math.floor(Math.random() * symbole.length)];
}

getPwdBtn.addEventListener("click" , () => {
    let password = ""
    for(let i = 0; i < length.value; i++){
            password += getPassword();
    }
    showPwd.value = password;
    copied();
})

function getPassword(){
    let password = [];
    if(uppercaseEl.checked){
        password.push(getUppercase());
    }
    if(lowercaseEl.checked){
        password.push(getLowercase());
    }
    if(numberEl.checked){
        password.push(getNumber());
    }
    if(symboleEl.checked){
        password.push(getSymbole());
    }
    return password[Math.floor(Math.random() * password.length)]
};

function copied(){  
    copy.addEventListener("click", () => {
        showPwd.select();
        document.execCommand("copy");            
    })
}
