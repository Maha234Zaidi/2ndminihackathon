
let input = document.getElementById("input");
let text = document.querySelector(".text");

// JavaScript
function Add() {
    if (input.value === "") {
        alert("Please! Enter Your Task");
    } else {
        let newElement = document.createElement("div");
        newElement.classList.add("task-item");

        let taskText = document.createElement("div");
        taskText.textContent = input.value;
        newElement.appendChild(taskText);

        let iconsDiv = document.createElement("div");

        let trashIcon = document.createElement("i");
        trashIcon.classList.add("fa", "fa-trash-o", "red-background", "white-icon");
        trashIcon.style.fontSize = "23px";
        iconsDiv.appendChild(trashIcon);

        let editIcon = document.createElement("i");
        editIcon.classList.add("fa", "fa-edit", "green-background", "white-icon");
        editIcon.style.fontSize = "23px";
        iconsDiv.appendChild(editIcon);

        newElement.appendChild(iconsDiv);

        text.appendChild(newElement);
        input.value = "";

        trashIcon.addEventListener("click", remove);
        editIcon.addEventListener("click", edit);

        function remove() {
            newElement.remove();
        }

        function edit() {
            let updatedText = prompt("Enter the updated task:", taskText.textContent);
            if (updatedText !== null && updatedText.trim() !== "") {
                taskText.textContent = updatedText;
            }
        }
    }
}