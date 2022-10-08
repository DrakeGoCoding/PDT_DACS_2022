const input_value = document.getElementById("input_value");
const btn_todo = document.getElementById("btn_todo");
const list_todo = document.getElementById("todo-list");


document.addEventListener("DOMContentLoaded", listTodoStorage);
btn_todo.addEventListener("click", addtodo);
list_todo.addEventListener("click", deleteTodo);


function addtodo(e) {
    e.preventDefault();
    todo = input_value.value;
    if (todo) {

        const newDiv = document.createElement("div");
        newDiv.classList.add('todo');
        //Tạo list todo
        const newTodo = document.createElement("li");
        newTodo.innerText = todo;
        newTodo.classList.add('todo-item');
        newDiv.appendChild(newTodo);
        //Add to local
        saveLocalStorage(todo);
        input_value.value = "";

        const btn_xoa = document.createElement("button");
        btn_xoa.innerText = "Delete";
        btn_xoa.classList.add("delete_btn");
        newDiv.appendChild(btn_xoa);
        list_todo.appendChild(newDiv);
    }
}
function deleteTodo(e) {
    const item = e.target;
    if (item.classList[0] === 'delete_btn') {
        const todo = item.parentElement;
        todo.remove();
        removeStorageToDo(todo);
    }
}

function saveLocalStorage(todo) {
    let task;
    if (localStorage.getItem("task") === null) {
        task = [];
    } else {
        task = JSON.parse(localStorage.getItem("task"))
    }
    task.push({
        text: todo,
        complete: false
    });
    localStorage.setItem("task", JSON.stringify(task));
}

function listTodoStorage() {
    let task;
    if (localStorage.getItem("task") === null) {
        task = [];
    } else {
        task = JSON.parse(localStorage.getItem("task"))
    }
    task.forEach(nhiemvu => {
        const newDiv = document.createElement("div");
        newDiv.classList.add('todo');
        //Tạo list todo
        const newTodo = document.createElement("li");
        newTodo.innerText = nhiemvu.text;
        newTodo.classList.add('todo-item');
        newDiv.appendChild(newTodo);

        const btn_xoa = document.createElement("button");
        btn_xoa.innerText = "Delete";
        btn_xoa.classList.add("delete_btn");
        newDiv.appendChild(btn_xoa);

        list_todo.appendChild(newDiv);

    })

}
function updateStorageItem(todo) {
    let task;
    if (localStorage.getItem("task") === null) {
        task = [];
    } else {
        task = JSON.parse(localStorage.getItem("task"))
    }
    const todoIndex = todo.children[0].innerText;

    index = task.findIndex(object => object.text === todoIndex);
    task[index].complete = true;
    localStorage.setItem("task", JSON.stringify(task));
}
function removeStorageToDo(todo) {
    let task;
    if (localStorage.getItem("task") === null) {
        task = [];
    } else {
        task = JSON.parse(localStorage.getItem("task"))
    }
    const todoIndex = todo.children[0].innerText;
    task.splice(task.indexOf(todoIndex), 1);
    localStorage.setItem("task", JSON.stringify(task));
}