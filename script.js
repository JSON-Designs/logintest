function validate() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if (username == "1" && password == "2") {
    window.open("login.html");
    alert("login successful");
    return false;
  } else {
    alert("Suck my ass, wrong password.");
    window.open("index.html");
  }
}
