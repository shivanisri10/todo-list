function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskValue = taskInput.value.trim();

  if (taskValue === "") {
    alert("Please enter a task 🌸");
    return;
  }

  const li = document.createElement("li");
  li.textContent = taskValue;

  // Mark as completed when clicked
  li.addEventListener("click", function () {
    li.classList.toggle("completed");
  });

  // Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "❌";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.onclick = function () {
    li.remove();
  };

  li.appendChild(deleteBtn);
  document.getElementById("taskList").appendChild(li);

  // Clear input
  taskInput.value = "";
}
