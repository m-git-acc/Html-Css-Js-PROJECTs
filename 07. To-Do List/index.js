const item = document.querySelector("#item");
const toDoBox = document.querySelector("#to-do-box");

item.addEventListener(
    "keyup",
    function(event){
        const checkerItem = document.querySelector("#item");
        if(event.key == "Enter" && checkerItem.value!= ''){
            addToDo(this.value);
            saveData();
            this.value = null;
        }
    }
)

function saveData(){
    const data = [];
    const notes = document.querySelectorAll(".contents");
    notes.forEach(
        (note)=>{
            data.push(note.innerText);
        }
    )
    
    if(data.length == 0){
        localStorage.removeItem("notes");
    }
    else{
        localStorage.setItem("notes",JSON.stringify(data));
    }

}

function addToDo(item){
    const listItem = document.createElement("li");
    listItem.innerHTML=`
        <span class="contents">${item}</span>
        <i class="fas fa-times"></i>
    `;
    
    listItem.addEventListener(
        "click",
        function() {
            this.classList.toggle("done");            
        }
    )
    listItem.querySelector("i").addEventListener(
        "click",
        function() {
            listItem.remove();
            saveData();
        }
    )
    toDoBox.appendChild(listItem);
}

(
    function(){
        const isNotes = JSON.parse(localStorage.getItem("notes"));
        if(isNotes!=null){
            isNotes.forEach(
                (isNote)=>{
                    addToDo(isNote);
                }
            )
        }
    }
)()