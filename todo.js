const toDoForm = document.querySelector(".js-toDoForm"),
toDoInput = toDoForm.querySelector(".js-toDoInput"),
toDoList = document.querySelector(".js-toDoList");




function addToDo() {
    event.preventDefault();
    //const toDo1 = localStorage.setItem("toDo1", toDoInput.value);
    createList(toDoInput.value);
    toDoInput.value="";
}

let toDos = [];

function createList(currentToDo) {
    const toDoLi = document.createElement("li");
    const toDoDelBtn = document.createElement("button");
    toDoDelBtn.innerText = "❌";
    toDoDelBtn.addEventListener("click", delToDo);
    const toDoSpan = document.createElement("span");
    toDoSpan.innerText = currentToDo;
    const newId = toDos.length +1;

    toDoLi.appendChild(toDoDelBtn);
    toDoLi.appendChild(toDoSpan);
    toDoLi.id = newId;
    toDoList.appendChild(toDoLi);

    const toDoObj = {
        id: toDos.length + 1,
        text: currentToDo
    };
    toDos.push(toDoObj);
    saveTodo();
}

function saveTodo() {
    localStorage.setItem("todos", JSON.stringify(toDos));
}


function loadToDos() {
    const loadToDos = JSON.parse(localStorage.getItem("todos"));
    if(loadToDos !== null){
        loadToDos.forEach(function(toDo){
            createList(toDo.text);
        });
    }
}

function delToDo(event) {
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const clenanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    toDos = clenanToDos;
    saveTodo();
}


function init() {
    loadToDos();
    toDoForm.addEventListener("submit", addToDo);
   
}
init();