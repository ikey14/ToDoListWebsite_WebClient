

function GetList()
{
    //How do I use an API?
    //Code here

    fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => response.json())
    .then(data => {
        for (let i = 0; i <= 10; i++) 
        {
            const task = data[i];
            console.log(task.title);
            AddElementAPI(task.title, task.completed);
        }
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
    taskComplete.className = "roundedBorder";
    taskComplete.innerText = "✔";
    taskSpan.style.textDecoration = completedStatus ? "line-through" : "none";
    taskComplete.onclick = () => {taskSpan.style.textDecoration = taskSpan.style.textDecoration === "line-through" ? "none" : "line-through";};

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
    //input.value = "";
}



// $("#words").append("<li>" + yourNewWord + "</li>");

// document.querySelector("#result").innerHTML = "Triangle's Area:" + area.toFixed(2);

// let base = document.querySelector("#base").value  
// let height = document.querySelector("#height").value