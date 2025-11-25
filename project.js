const addButton = document.querySelector(".addTask");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const infoButton = document.querySelector(".showInfo");
const infoText = document.getElementById("message");


function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const li = document.createElement('li');
        li.textContent = taskText;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("deleteItem");
        deleteBtn.addEventListener("click", () => {
            li.remove();
        })

        li.appendChild(deleteBtn);
        taskList.appendChild(li);
        taskInput.value = '';
    } else {
        alert("Please enter some text!");
    }
}


infoButton.addEventListener("click", () => {
    if (infoText.style.display === "none") {
        infoText.style.display = "block";
    } else {
        infoText.style.display = "none";
    }
})


addButton.addEventListener("click", addTask);

