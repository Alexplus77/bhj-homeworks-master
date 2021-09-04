import { todoDataBase } from "./dataBase.js";

const taskInput = document.querySelector(".tasks__input");
const taskList = document.querySelector(".tasks__list");
const taskAddBtn = document.querySelector(".tasks__add");

const markupTask = (text, id) => {
  const task = document.createElement("div");
  task.classList.add("task");
  task.setAttribute("id", id);
  taskList.appendChild(task);

  const titleTask = document.createElement("div");
  titleTask.classList.add("task__title");
  titleTask.innerHTML = text;
  task.appendChild(titleTask);

  const removeBtn = document.createElement("a");
  removeBtn.setAttribute("href", "#");
  removeBtn.innerHTML = "&times";
  removeBtn.classList.add("task__remove");
  task.appendChild(removeBtn);
};

const handleTask = (e) => {
  e.preventDefault();
  const idTask = Math.random();
  if (!taskInput.value.trim().length) {
    return alert("Вы не указали задачу!!!");
  }
  todoDataBase.push({
    id: idTask,
    title: taskInput.value,
  });
  markupTask(taskInput.value, idTask);
  taskInput.value = "";
};

const removeTask = (e) => {
  e.preventDefault();
  if (!e.target.classList.contains("task__remove")) {
    return;
  }
  const targetId = +e.target.closest(".task").getAttribute("id");
  const taskFromBase = todoDataBase.find((todo) => +todo.id === targetId);
  if (taskFromBase) {
    todoDataBase.splice(todoDataBase.indexOf(taskFromBase), 1);   
    console.log(todoDataBase);
  }
   e.target.parentElement.remove();
};

taskAddBtn.addEventListener("click", handleTask);
taskList.addEventListener("click", (e) => removeTask(e));
