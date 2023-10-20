const getColor = () =>{
    //hex code
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = "#"+randomNumber.toString(16);
    
    document.getElementById("clrr").innerText = randomCode;
    document.body.style.backgroundColor = randomCode;
}


document.getElementById("btn").addEventListener("click",getColor);
