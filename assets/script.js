
var notesList = document.querySelector("#todo-list");





function savedNotes() {
    var notes = notesList.value.trim();
    localStorage.setItem("notes", JSON.stringify(notes));
}

function renderSavedNotes() {
    var lastNotes = JSON.parse(localStorage.getItem("notes"));
    if (lastNotes !== null) {
        document.getElementsByClassName("msg").innerHTML = lastNotes;
    } else {
        return;
    }
}

saveButton.addEventListener("click", function(event) {
    event.preventDefault();
    saveNotes();
    renderSavedNotes();
    });