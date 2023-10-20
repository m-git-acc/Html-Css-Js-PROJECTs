setTimeout(function(){
    let text = document.querySelector(".display");
    text.innerText = "WAIT";
},0);

setTimeout(function(){
    let text = document.querySelector(".display");
    text.innerText = 0;
},500);

let subtract = document.querySelector(".button1");
let addition = document.querySelector(".button2");
let clear = document.querySelector(".clearBTN");

function subt(){
    let text = document.querySelector(".display");
    let number = parseInt(text.innerText);
    let ans = number-1;    
    text.innerText = ans;
}
function add(){
    let text = document.querySelector(".display");
    let number = parseInt(text.innerText);
    let ans = number+1;    
    text.innerText = ans;    
}

function clearr(){

    const myIntervel = setInterval(timmer,50);

    function timmer(){

        let text = document.querySelector(".display");
        let number = parseInt(text.innerText);

        if(number>0){
            text.innerText = --number;
        }
        if(number<0){
            text.innerText = ++number;
        }

        if (number == 0) {
            clearInterval(myIntervel);
        }
    }
}

subtract.addEventListener("click",subt);
addition.addEventListener("click",add);
clear.addEventListener("click",clearr);