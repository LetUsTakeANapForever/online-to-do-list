document.addEventListener("DOMContentLoaded", function(){
    const addButton = document.querySelector(".addButton");
    const containerTask = document.querySelector(".containerTask");
    const taskInput = document.querySelector(".taskInput");
    const taskBox = document.querySelector(".taskBox");
    const deleteButton = document.querySelector(".deleteButton");

    addButton.addEventListener("click", function(){
        containerTask.classList.remove("hidden"); // Show the containerTask if hidden
        
        // Clear any previous task text to avoid duplicates
        const existingTaskText = taskBox.querySelector(".taskText");
        if (existingTaskText) {
            existingTaskText.remove();
        }

        // Create a new span for the task text
        const taskText = document.createElement("span");
        taskText.classList.add("taskText"); // Add a class for styling if needed
        taskText.textContent = taskInput.value; // Set the text to input value
        
        // Insert the task text before the delete button
        taskBox.insertBefore(taskText, taskBox.querySelector(".deleteButton"));

        taskInput.value = ""; // Clear the input field after adding the task
    });

    deleteButton.addEventListener("click", function(){
        taskBox.classList.toggle("hidden");
    });
});