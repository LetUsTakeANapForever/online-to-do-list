// Dynamic adding

function newElement() {
    const addBt = document.getElementById("addBt");
    const inputVal = document.getElementById("inputValue");
    const containerParent = document.querySelector(".containerTask"); // define the parent container

    addBt.addEventListener("click", function () {
        // ensure the input is not empty
        if (inputVal.value.trim() !== "")
            // create the task container (child)
            var taskContainer = document.createElement("div");
            taskContainer.classList.add("taskBox"); // add a class for styling
            taskContainer.textContent = inputVal.value; 

            var deleteBt = document.createElement("button");
            deleteBt.classList.add("deleteButton"); 
            deleteBt.textContent = "X";

            deleteBt.addEventListener("click", function () {
                taskContainer.remove();
            });

            taskContainer.appendChild(deleteBt);
            containerParent.appendChild(taskContainer);
        // clear the input field
        inputVal.value = "";
    });
}

newElement();
