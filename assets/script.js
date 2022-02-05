
var notesList = document.querySelector("#notes-text");
var saveButton = document.querySelector(".button");

var todos = [];


function renderSavedNotes() {
    var storedNotes = JSON.parse(localStorage.getItem("notes"));
    
    notesList.innerHTML = "";

    for (var i = 0; i < todos.length; i++) {
        var storedNotes = todos[i];
    
        var li = document.createElement("li");
        li.textContent = storedNotes;
        li.setAttribute("data-index", i);
    
        var button = document.createElement("button");
        button.textContent = "Complete ✔️";
    
        li.appendChild(button);
        todoList.appendChild(li);
}}

function savedNotes() {
    var notes = notesList.value.trim();
    localStorage.setItem("notes", JSON.stringify(notes));
}

saveButton.addEventListener("click", function(event) {
    event.preventDefault();
    savedNotes();
    renderSavedNotes();
});