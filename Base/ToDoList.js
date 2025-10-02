function AddElement()
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

// $("#words").append("<li>" + yourNewWord + "</li>");

// document.querySelector("#result").innerHTML = "Triangle's Area:" + area.toFixed(2);

// let base = document.querySelector("#base").value  
// let height = document.querySelector("#height").value