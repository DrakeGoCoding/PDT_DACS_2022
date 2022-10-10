const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");
const deleteAllBtn= document.querySelector(".footer button");

inputBox.onkeyup = () => {
  
    let userEnteredValue = inputBox.value;
  
    if (userEnteredValue.trim() != 0){
        addBtn.classList.add("active");

    } else {
        addBtn.classList.remove("active");
    }
}

showTasks();

addBtn.onclick = () => {
    let userEnteredValue = inputBox.value;
    let getLocalStrorageData = localStorage.getItem("New todo");

    if(getLocalStrorageData == null) {
        listArray = [];

    } else {
        listArray = JSON.parse(getLocalStrorageData);
    }
    listArray.push(userEnteredValue);
    localStorage.setItem("New todo", JSON.stringify(listArray));
    showTasks();
    addBtn.classList.remove("active");
}

function showTasks(){
    let getLocalStrorageData = localStorage.getItem("New todo");

    if(getLocalStrorageData == null) {
        listArray = [];

    } else {
        listArray = JSON.parse(getLocalStrorageData);
    }

    const pendingTasksNumb = document.querySelector(".pendingTasks");
    pendingTasksNumb.textContent = listArray.length;
    if(listArray.length > 0){
        deleteAllBtn.classList.add("active");
    } else {
        deleteAllBtn.classList.remove("active");
    }
     let newLiTag = "";
     listArray.forEach((element, index) => {
        newLiTag += `<li>${element} <span class ="icon" 
        onclick="deleteTask(${index})> <i class="fa-solid fa-trash"></i>
        </span> </li>`;
     });
     todoList.innerHTML = newLiTag;
     inputBox.value = "";

}
function deleteTask(index){
    let getLocalStrorageData = localStorage.getItem("New todo");
    listArray = JSON.parse(getLocalStrorageData);
    listArray.splice(index,1);
    localStorage.setItem("New todo", JSON.stringify(listArray));
    showTaks();

}
deleteAllBtn.onclick = () => {
    listArray = [];
    localStorage.setItem("New todo",JSON.stringify(listArray));
    showTaks();
}