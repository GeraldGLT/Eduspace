function toggleName() {
    var currLabel = document.getElementById("loginLabelID").innerHTML;
    if (currLabel == "Name") document.getElementById("loginLabelID").innerHTML = "Email";
    else document.getElementById("loginLabelID").innerHTML = "Name";
}

function logOut() {
    sessionStorage.removeItem("Name");
    sessionStorage.removeItem("Email");

    window.location = "index.html"
}

function SetNavBar() {
    if (sessionStorage.getItem("Name") == null && sessionStorage.getItem("email") == null) {
        document.getElementById('navUser').innerHTML = '<a class="nav-link" href="#" data-toggle ="modal" data-target="#loginForm"><span class="fa-sharp fa-solid fa-right '
    }
}