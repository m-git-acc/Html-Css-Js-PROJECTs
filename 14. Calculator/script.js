let string = "";
let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        let cond = document.querySelector("input").value
        if((e.target.innerHTML== "=") && (cond!="")){
            string = eval(string);
            document.querySelector("input").value=string;
        }
        else if(e.target.innerHTML== "clear"){
            string ="";
            document.querySelector("input").value=string;
        }
        else if(e.target.innerHTML!= "="){
            string +=e.target.innerHTML;
            document.querySelector("input").value=string;
        }
    })

})






