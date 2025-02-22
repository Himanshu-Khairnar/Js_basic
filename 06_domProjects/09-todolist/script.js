const input = document.getElementById("task-input");
const addButton = document.getElementById("add-task");
const TaskList = document.getElementById("task-list");
const CompletedList = document.getElementById("task-list-completed");
addButton.addEventListener("click", (e) => {
  let value = input.value;
  input.value = "";
  addValue(value);
});

function addValue(value) {
  const lidata = document.createElement("li");
  lidata.innerHTML = `${value} <button class="Completed">✓</button> <button class="Remove"> ✗</button>`;
  TaskList.appendChild(lidata);
  
const CompletedTask = document.querySelector(".Completed");
const RemoveTask = document.querySelector(".Remove");
RemoveTask.addEventListener("click", () => {
  const parentElement = RemoveTask.parentElement;
  TaskList.removeChild(parentElement);
});
CompletedTask.addEventListener("click", () => {
    const parentElement = CompletedTask.parentElement;
    TaskList.removeChild(parentElement);
    const value = parentElement.innerHTML.split("<button")[0].trim();
console.log(value);

    const complete = document.createElement("li")
    complete.innerHTML = value
  CompletedList.appendChild(complete);
});
}

