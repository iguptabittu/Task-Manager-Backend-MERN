const API_URL = "http://localhost:3000/api/tasks";

document.getElementById("task-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const title = document.getElementById("task-title").value;

  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, completed: false }),
  });

  if (response.ok) {
    document.getElementById("task-title").value = "";
    loadTasks();
  }
});

async function loadTasks() {
  const response = await fetch(API_URL);
  const tasks = await response.json();

  const taskList = document.getElementById("task-list");
  taskList.innerHTML = "";

  tasks.forEach(task => {
    const li = document.createElement("li");
    li.textContent = task.title;

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.onclick = async () => {
      await fetch(`${API_URL}/${task._id}`, { method: "DELETE" });
      loadTasks();
    };

    li.appendChild(delBtn);
    taskList.appendChild(li);
  });
}

// Load tasks on page load
loadTasks();
