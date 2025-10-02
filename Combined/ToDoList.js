

function AddElementUser()
{
    //document.querySelector("#toDo");

    const input = document.querySelector("#taskInput");
    const taskText = input.value.trim();
    if (taskText === "")
    {
        return; // ignore empty input
    } 

    // Create the list item
    const taskLi = document.createElement("li");

    // Task text
    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText + "\t";

    // Complete Button
    const taskComplete = document.createElement("button");
    taskComplete.className = "roundedBorder";
    taskComplete.innerText = "✔";
    taskComplete.onclick = () => {
    taskSpan.style.textDecoration =
    taskSpan.style.textDecoration === "line-through" ? "none" : "line-through";};

    const taskDelete = document.createElement("button");
    taskDelete.textContent = "✖";
    taskDelete.className = "roundedBorder";
    taskDelete.onclick = () => taskLi.remove();

    // Put them together
    taskLi.appendChild(taskSpan);
    taskLi.appendChild(taskComplete);
    taskLi.appendChild(taskDelete);

    document.querySelector("#toDoList").appendChild(taskLi);

    // Clear input
    input.value = "";

}


function GetList()
{
    // Fetch info from API url
    fetch("https://jsonplaceholder.typicode.com/todos")
    // Wait for response, when results are in put them in JSON format
    .then(response => response.json())
    // Since this is also promise based, we need to wait again.
    // once we have the JSON, we take the important info of the first 10 elements
    .then(data => data.slice(0, 10))
    .then(data10 => {
        data10.forEach(task => {
            console.log(task.title);
            AddElementAPI(task.title, task.completed);
        });
    })
    .catch(error => console.error(error));

}


function AddElementAPI(taskText, completedStatus)
{
    //document.querySelector("#toDo");

    //const input = document.querySelector("#taskInput");
    //const taskText = input.value.trim();
    // const taskText = newToDo.title;
    // if (taskText === "")
    // {
    //     return; // ignore empty input
    // } 

    // Create the list item
    const taskLi = document.createElement("li");

    // Task text
    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText + "\t";

    // Complete Button
    const taskComplete = document.createElement("button");
    taskComplete.className = "roundedBorder grayWhiteGradBG";
    taskComplete.innerText = "✔";
    taskSpan.style.textDecoration = completedStatus ? "line-through" : "none";
    taskSpan.className = completedStatus? "completed" : "notCompleted";
    taskComplete.onclick = () => {taskSpan.style.textDecoration = taskSpan.style.textDecoration === "line-through" ? "none" : "line-through";};

    // Delete Button
    const taskDelete = document.createElement("button");
    taskDelete.textContent = "✖";
    taskDelete.className = "roundedBorder grayWhiteGradBG";
    taskDelete.onclick = () => taskLi.remove();

    // Put them together
    taskLi.appendChild(taskSpan);
    taskLi.appendChild(taskComplete);
    taskLi.appendChild(taskDelete);

    document.querySelector("#toDoList").appendChild(taskLi);

    // Clear input
    //input.value = "";
}

// $("#words").append("<li>" + yourNewWord + "</li>");

// document.querySelector("#result").innerHTML = "Triangle's Area:" + area.toFixed(2);

// let base = document.querySelector("#base").value  
// let height = document.querySelector("#height").value