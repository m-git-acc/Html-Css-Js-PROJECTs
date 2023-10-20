const questions = [
    {'que': "Which of the following is a client site language?",
    'a': "Java",
    'b': "C",
    'c': "Python",
    'd': "JavaScript",
    'correct': "d"},
    
    {'que': "What does HTML stand for?",
    'a': "Hypertext Markup Language",
    'b': "Cascading Style Sheet",
    'c': "Jason Object Notation",
    'd': "Helicopters Terminals Motorboats Lamborginis",
    'correct': "a"},

    {'que': "What year was JavaScript launched?",
    'a': "1996",
    'b': "1995",
    'c': "1994",
    'd': "none of the above",
    'correct': "b"},

    {'que': "What does CSS stands for?",
    'a': "Hypertext Markup Language",
    'b': "Cascading Style Sheet",
    'c': "Jason Object Notation",
    'd': "Helicopters Terminals Motorboats Lamborginis",
    'correct': "b"}
];

let index = 0;
let total = questions.length;
let right = 0;
let wrong = 0;

const quesBox = document.getElementById("quesBox");
const optionInputs = document.querySelectorAll(".options");

function loadQuestion(){
    if(index==total){
        return endQuiz();
    }
    reset();
    const data = questions[index];
    // quesBox.innerText = index+") "+data.que;
    quesBox.innerText = `${index+1}) ${data.que}`;

    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;

    // index++;
}

function submitQuiz(){
    colorChanger();
    const ans = getAnswer();
    const data = questions[index];
    if(ans==data.correct){
        right++;
    }else{
        wrong++;
    }
    index++;

    loadQuestion();
    return;
}

function getAnswer(){
    let answer;
    optionInputs.forEach((input)=>{
        if(input.checked){
            answer =  input.value;
        }
    })
    return answer;
}

function reset(){
    optionInputs.forEach(
        (input)=>{
            input.checked = false;
        }
    )
}

function endQuiz(){
    document.getElementById("box").innerHTML = `
    <div style="text-align:center;">
        <h3> Thank You For Playing The Quiz </h3>
        <h2>${right} / ${total} are correct.</h2>
    </div>
    
    `;
}

function colorChanger(){
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = "#"+randomNumber.toString(16);

    document.body.style.backgroundColor = randomCode;
    document.querySelector(".btn").style.backgroundColor = randomCode;

}

loadQuestion();
