const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerSet = "abcdefghijklmnopqrstuvwxyz"
const numberSet = "1234567890"
const symbolSet = "~!@#$%^&*()_+/"

//selectors
const passBox = document.getElementById("pass-box");
const totalChar = document.getElementById("total-char");
const upperInput = document.getElementById("upper-case");
const lowerInput = document.getElementById("lower-case");
const numberInput = document.getElementById("numbers");
const symbolInput = document.getElementById("symbols");

const getRandomData = (dataset) =>{
    return dataset[Math.floor(Math.random() * dataset.length)]
}

let passCopy = "";
const generatePassword = (password= "")=>{
    if(upperInput.checked){
        password += getRandomData(upperSet);
    }
    if(lowerInput.checked){
        password += getRandomData(lowerSet);
    }
    if(numberInput.checked){
        password += getRandomData(numberSet);
    }
    if(symbolInput.checked){
        password += getRandomData(symbolSet);
    }

    if(password.length < totalChar.value){
        return generatePassword(password);
    }

    passCopy =  truncateString(password,totalChar.value);
    passBox.innerText = passCopy;
    colorChanger();
}


document.getElementById("btn").addEventListener("click",
    function(){
        generatePassword();
    });

    
function colorChanger(){
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = "#"+randomNumber.toString(16);

    document.querySelector(".main").style.backgroundColor = randomCode;
    document.querySelector("#btn").style.backgroundColor = randomCode;
    document.querySelector("#btn2").style.backgroundColor = randomCode;
}



function truncateString(str, num) {
    if (str.length > num) {
        let subStr = str.substring(0, num);
        return subStr;
    } else {
        return str;
    }
}

function copy(){
    navigator.clipboard.writeText(passCopy);

    setTimeout(function(){
        document.querySelector("#btn2").innerText = "copied done";
    },0);
    setTimeout(function(){
        document.querySelector("#btn2").innerText = "copy";
    },500);
}
document.querySelector("#btn2").addEventListener("click",copy);