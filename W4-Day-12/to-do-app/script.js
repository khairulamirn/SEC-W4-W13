// FORM SUBMISSION 
// APPEND NEW CHILD TO THE PARENT

const taskForm = document.querySelector("#taskForm");
const tasksList = document.querySelector("#tasksList");

taskForm.addEventListener("submit", function (event) {
    // Prevent the default form submission 
    // by default, the form will submit a request to the server and reload the page
    event.preventDefault();

    // event.target is Node List or array of all form elements 
    const task = event.target[0].value;
    console.log(task);

    // add new list inside the ol 
    // 1. create a new list element
    const newList = document.createElement('li');

    // 2. change the innerText of the newly created list element
    newList.innerText = task;

    // 3. append the newly created list element to the ol (children to parent)
    tasksList.appendChild(newList);

    // 4. clear the input field or reset the form 
    // event.target.reset();
    taskForm.reset();
});

// Todo App 

// 1. Add a delete button to each task (remove)
// 2. Add a checkbox to each task input type checkbox (text should be a line-trough)