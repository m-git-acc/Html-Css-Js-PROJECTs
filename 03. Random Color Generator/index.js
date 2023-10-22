const getColor = () =>{
    //hex code
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = "#"+randomNumber.toString(16);
    
    document.getElementById("clrr").innerText = randomCode;
    document.body.style.backgroundColor = randomCode;
}
function copy(){
    const randomCode = document.getElementById("clrr").innerText;
    navigator.clipboard.writeText(randomCode);
    console.log("copied")

    setTimeout(function(){
        document.getElementById("cpyy").innerText = "COPIED";
    },0);
    setTimeout(function(){
        document.getElementById("cpyy").innerText = "copy";
    },500);
}

document.getElementById("btn").addEventListener("click",getColor);
document.getElementById("cpyy").addEventListener("click",copy)