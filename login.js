// Create the login function here.
function login(){
    player_name = document.getElementById("playername").value;
    localStorage.setItem("player_name",player_name);
    window.location = "gamepage.html";
}