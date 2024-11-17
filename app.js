// Static adding

function newElement() {
    const addButton = document.querySelector(".addButton");
    const containerTask = document.querySelector(".containerTask");
    const taskInput = document.querySelector(".taskInput");
    const taskBox = document.querySelector(".taskBox");
    const deleteButton = document.querySelector(".deleteButton");

    addButton.addEventListener("click", function(){
        containerTask.classList.remove("hidden"); // show the containerTask if hidden
        
        // avoid text duplicates
        const existingTaskText = taskBox.querySelector(".taskText");
        if (existingTaskText) {
            existingTaskText.remove();
        }

        const taskText = document.createElement("span");
        taskText.classList.add("taskText"); // add a class for styling
        taskText.textContent = taskInput.value; // set the text to input value
        
        // insert the task text before the delete button
        taskBox.insertBefore(taskText, taskBox.querySelector(".deleteButton"));

        taskInput.value = "";
    });

    deleteButton.addEventListener("click", function(){
        taskBox.classList.toggle("hidden");
    });    
}
    
newElement()