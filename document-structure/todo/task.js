import { todoDataBase } from "./dataBase.js";

const taskInput = document.querySelector(".tasks__input");
const taskList = document.querySelector(".tasks__list");
const taskAddBtn = document.querySelector(".tasks__add");
const markupTask = (text) => {
  const task = document.createElement("div");
  task.classList.add("task");
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
  todoDataBase.push(taskInput.value);
  
  markupTask(taskInput.value);
  taskInput.value = "";
  removeTask();
};

const removeTask = () => {
    const removeBtn = [...document.querySelectorAll(".task__remove")];
    
  removeBtn.forEach((btn) =>
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const targetTask = e.target.previousElementSibling.innerHTML;
      const taskFromBase = todoDataBase.find((todo) => todo === targetTask);
      if (taskFromBase) {
        const taskListAll = [...taskList.querySelectorAll(".task")];
        const taskOne = taskListAll.find(
          (elem) => elem === e.target.closest(".task")
        );
        todoDataBase.splice(todoDataBase.indexOf(taskFromBase), 1);
          taskList.removeChild(taskOne);
          console.log(todoDataBase);
      }
    })
  );
};
taskAddBtn.addEventListener("click", handleTask);
