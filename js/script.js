function validate() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if (username == "1" && password == "2") {
    window.open("https://sebastianbergfoto.se/");
    alert("login successful");
    return false;
  } else {
    alert("FEEEEEL!!");
    window.open("index.html");
  }
}
