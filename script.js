function addTask() {
  const list = document.getElementById("todo-list");
  const task = document.getElementById("new-task").value;
  const item = document.createElement("li");
  item.textContent = task;
  list.appendChild(item);
}
