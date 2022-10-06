let listToDo = [{ content: "Learn Figma", done: false }];

const input = document.getElementById('add-input');
const containerList = document.getElementById('to-do');
const doneBtn = document.getElementById('done-btn');
const clearBtn = document.getElementById('clear-btn');
const deleteIcons = document.getElementsByClassName('fa-trash');
const toDoItems = document.getElementsByClassName('to-do-content');
const checkboxes = document.getElementsByClassName('checkbox');
const info = document.getElementById('sub-heading');

const renderToDo = (todo, index) => {
	return /*html*/ `
    <div class="to-do-item">
        <div class="content">
            <input type="checkbox" name="" onclick="handleCheck(this)" class="checkbox" id="delete-${index}">
            <div class="to-do-content">${todo.content}</div>
        </div>
        <i class="fa-solid fa-trash onClick='handleDelete(delete-${index})'"></i>
    </div>`;
};

const renderList = () => {
	clearList();

	if (!listToDo.length) return;

	listToDo.forEach((todo, index) => {
		containerList.innerHTML += renderToDo(todo, index);
		if (todo.done) {
			toDoItems.item(index).classList.add("strike");
			checkboxes.item(index).setAttribute("checked", "");
			return;
		}
		return;
	});
};const clearList = (clickClear = false) => {
	if (clickClear) {
		listToDo = [];
	}
	containerList.innerHTML = "";
};

const handleDelete = (index) => {
	listToDo.splice(index,1);
	render();
};

const handleCheck = (el) => {
	const index = parseInt(el.id.split("-").at(-1));
	if (el.checked === true) {
		toDoItems.item(index).classList.add("strike");
		listToDo[index].done = true;
		render();
		return;
	}
	toDoItems.item(index).classList.remove("strike");
	listToDo[index].done = false;
	render();
	return;
};

const renderInfo = () => {
	const done = listToDo.filter((e) => e.done).length;
	const remaining = listToDo.filter((e) => !e.done).length;

	info.innerHTML = /*html*/ `
    <div style='display: flex; justify-content: center'>
      <span>Total: ${listToDo.length}</span>
      <span>Done: ${done}</span>
      <span>Remaining: ${remaining}</span>
    </div>
  `;
};

const render = () => {
	renderList();
	renderInfo();
};

input.addEventListener("keypress", (e) => {
	if (!e.target.value) return;
	if (e.key === "Enter") {
		listToDo.push({
			content: e.target.value,
			done: false,
		});
		input.value = "";
		render();
	}
});


clearBtn.addEventListener("click", () => {
	clearList(true);
});

doneBtn.addEventListener("click", () => {
	listToDo = listToDo.filter((e) => !e.done);
	render();
});

render();