let addButton=document.getElementById("add-button");
addButton.addEventListener("click",addToDoItem);
function addToDoItem(){
    alert("Add button clicked");
    
        
}

let clearButton=document.getElementById("clear-completed-button");
clearButton.addEventListener("click",clearCompletedToDoItem);
function clearCompletedToDoItem(){
    //alert("clear button clicked");
}
let emptyButton=document.getElementById("empty-button");
emptyButton.addEventListener("click",emptyList);
function emptyList(){
    alert("empty button clicked");
}
let saveButton=document.getElementById("save-button");
saveButton.addEventListener("click",saveList);
function saveList(){
    alert("save button clicked");
}


// function updateList(){
//     //alert("update button clicked");
// }

let toDoEntryBox=document.getElementById("todo-entry-box");
let toDoList=document.getElementById("todo-list");

function newToDoItem(itemText, completed) {
    let toDoItem = document.createElement("li");
    toDoItem.setAttribute("id","todo_li");
    let toDoText = document.createTextNode(itemText);
    toDoItem.appendChild(toDoText);

    // let task_edit_botton= document.createElement("button");
    //     // task_edit_botton.classList.add("Edit");
    //     task_edit_botton.innerHTML = "Edit";

    if (completed) {
        toDoItem.classList.add("completed");
    }

    toDoList.appendChild(toDoItem);
    toDoItem.addEventListener("dblclick", toggleToDoItemState);
}

function addToDoItem(){
    
    var itemText = toDoEntryBox.value;
    newToDoItem(itemText, false);
        
}


function toggleToDoItemState() {
    if (this.classList.contains("completed")) {
        this.classList.remove("completed");
    } 
    //
    else if(this.classList.contains("completed")){
        this.classList.edit("completed");
    }

    //
    
    else {
        this.classList.add("completed");
    }
}

function clearCompletedToDoItems() {
    var completedItems = toDoList.getElementsByClassName("completed");

    while (completedItems.length > 0) {
        completedItems.item(0).remove();
    }
}

function emptyList() {
    var toDoItems = toDoList.children;
    while (toDoItems.length > 0) {
        toDoItems.item(0).remove();
    }
}



function saveList() {
    let toDos = [];

    for (let i = 0; i < toDoList.children.length; i++) {
        let toDo = toDoList.children.item(i);

        let toDoInfo = {
            "task": toDo.innerText,
            "completed": toDo.classList.contains("completed")
        };

        toDos.push(toDoInfo);

    }

    localStorage.setItem("toDos", JSON.stringify(toDos));
}

function loadList() {
    if (localStorage.getItem("toDos") != null) {
        let toDos = JSON.parse(localStorage.getItem("toDos"));

        for (let i = 0; i < toDos.length; i++) {
            let toDo = toDos[i];
            newToDoItem(toDo.task, toDo.completed);
        }
    }
}

loadList();




let editButton=document.getElementById("edit-button");
editButton.addEventListener("click",edit);
var ind;

function edit(ind) {
    //alert(ind);
    let arr=document.getElementById("todo-li");
    console.log(arr);
    // document.getElementById("editList").style.display = "Block";
    // document.getElementById("val").value = arr[ind];
    // document.getElementById("val").dataset.ind = ind
    // ind = ind;
  }

  function update() {
    edit();
    var updte = document.getElementById("val").value;
    ind = document.getElementById("val").dataset.ind;
     arr[ind] = updte;
    newToDoItem();
    // addToDoItem();
  }


// let updateButton=document.getElementById("update-button");
// updateButton.addEventListener("click",()=>{
//     editTask(arrayItems,listItem);
// });
// function updateList(){
//     alert("update button clicked");
// }

// function update(){
//     // const editBtn = document.createElement('update-button');
//     // editBtn.innerHTML = 'edit';
//     // listItem.appendChild(editBtn);

//     //call a function when the button will be clicked
//     updateButton.addEventListener('click', () => {
//         editTask(arrayItems, listItem);
//     });

// }

// const editTask = (els = [], inputTask) => {

//     //create a textbox into list items
//     inputTask.innerHTML = els.map((el, i) =>    {
//     return `
//     <input type="text" class="editing-text[${i}]" name="item[${i}]" required>
//     <input type="submit" class="complete-btn" value="complete">
//     `
// });

// }


// const saveInd = document.getElementById("saveIndex");
//      saveInd.value = ind;
//     let todoos = localStorage.getItem("toDos");
//     todoArray = JSON.parse(todoos);
//     text.value = todoArray[ind];
//     addButton.style.display = "none";
//     saveButton.style.display = "block";
    
// }

