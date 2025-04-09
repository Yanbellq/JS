document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTaskButton");
    const taskList = document.getElementById("taskList");
    const sortByDate = document.getElementById("sortByDate");
    const sortByStatus = document.getElementById("sortByStatus");

    let tasks = [];

    const renderTasks = () => {
        taskList.innerHTML = "";
        tasks.forEach((task, index) => {
            const li = document.createElement("li");
            li.className = task.completed ? "completed" : "";

            const taskText = document.createElement("span");
            taskText.textContent = task.text;
            taskText.className = task.completed ? "taskText completed" : "taskText";

            li.addEventListener("click", () => {
                tasks[index].completed = !tasks[index].completed;
                renderTasks();
            });

            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Видалити";
            deleteButton.className = "deleteButton";
            deleteButton.addEventListener("click", () => {
                tasks.splice(index, 1);
                renderTasks();
            });

            li.appendChild(taskText);
            li.appendChild(deleteButton);
            taskList.appendChild(li);
        });
    };

    addTaskButton.addEventListener("click", () => {
        if (taskInput.value.trim()) {
            tasks.push({ text: taskInput.value, completed: false, addedAt: new Date() });
            taskInput.value = "";
            renderTasks();
        }
    });

    sortByDate.addEventListener("click", () => {
        tasks.sort((a, b) => a.addedAt - b.addedAt);
        renderTasks();
    });

    sortByStatus.addEventListener("click", () => {
        tasks.sort((a, b) => a.completed - b.completed);
        renderTasks();
    });
});
