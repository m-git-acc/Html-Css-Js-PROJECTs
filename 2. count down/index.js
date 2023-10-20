console.log("hello world");
const endDate ="20 Oct 2023 08:54:40 PM"

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input");

function clock(){
    const end = new Date(endDate);
    const now = new Date ();
    
    const milli_sec = end-now;
    const sec = milli_sec/1000;

    //convert into days;
    const days = Math.floor(sec/3600/24);
    //convert into hours;
    const hours = Math.floor((sec/3600)%24);
    //convert into minutes;
    const min = Math.floor((sec/60)%60);
    //convert into second;
    const second = Math.floor(sec%60);

    inputs[0].value = days;
    inputs[1].value = hours;
    inputs[2].value = min;
    inputs[3].value = second;


    if(milli_sec<=0){
        clearInterval(myInterval);
        inputs[0].value = "👍";
        inputs[1].value = "👍";
        inputs[2].value = "👍";
        inputs[3].value = "👍";
    }
}

const myInterval = setInterval(
    ()=>{clock();}
    ,1000);