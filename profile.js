function showPass() {
    document.getElementById("password").innerHTML = "DlcrzJn";
}
function edit_username() {
    var usernameContainer = document.getElementById("username_container");
    var usernameText = document.getElementById("username");
    var currentUsername = usernameText.innerHTML;
    usernameContainer.innerHTML = `<input type='text' id='username_input' value='${currentUsername}' /> <button onclick='saveUsername()'><i class='fas fa-save'></i></button>`;
}

function saveUsername() {
    var usernameInput = document.getElementById("username_input");
    var newUsername = usernameInput.value;
    var usernameContainer = document.getElementById("username_container");
    usernameContainer.innerHTML = `<span id='username'>${newUsername}</span> <button class='edit_name' onclick='editUsername()'><i class='fas fa-pen'></i></button>`;
}

function saveChanges() {
    alert("Changes saved.")
}