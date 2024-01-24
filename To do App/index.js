
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
  
    const addTask = () => {
      const task = taskInput.value;
      if (task !== "") {
        const listItem = document.createElement("li");
        listItem.className = "list-group-item ";
        listItem.innerHTML = `
          ${task}
          <button class="btn btn-danger remove" onclick="removeTask()">Remove</button>
        `;
        taskList.appendChild(listItem);
        taskInput.value = "";
      }
    };
  
    const removeTask = (button) => {
    
      const listItem = button.parentNode;
      console.log(listItem);
      taskList.removeChild(listItem);
    };
  
    const removeAll = () => {
      taskList.innerHTML = "";
    };
  
    document.getElementById("taskInput").addEventListener("keydown", (event)=> {
      if (event.key === "Enter") {
        addTask();
      }
    });

    document.querySelector(".addTask").addEventListener("click", () => {
        addTask();
    });

    // Event delegation for remove buttons
    taskList.addEventListener("click", (event) => {
        if (event.target.classList.contains("remove")) {
            removeTask(event.target);
        }
    });

    document.querySelector(".removeAll").addEventListener("click", () => {
        removeAll();
    });

