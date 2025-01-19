let attempt = 3;

function CheckUser() {
  let username = document.getElementById("username").value;
  let userElement = document.getElementById("username");
  let userLabel = document.getElementById("username-label");
  if (username == "StudentIETI") {
    userElement.style.color = "#54d154";
    userLabel.style.color = "#54d154";

    userElement.style.border = "1px solid #54d154";

    document.getElementById("user-checkmark").style.opacity = "1";
    document.getElementById("user-xmark").style.opacity = "0";
  } else {
    userElement.style.color = "#ff0000";
    userLabel.style.color = "#ff0000";

    userElement.style.border = "1px solid #ff0000";

    document.getElementById("user-checkmark").style.opacity = "0";
    document.getElementById("user-xmark").style.opacity = "1";
  }
}

function CheckPassword() {
  let password = document.getElementById("password").value;
  let passwordElement = document.getElementById("password");
  let passwordLabel = document.getElementById("password-label");

  if (password == "IA2024-2025") {
    passwordElement.style.color = "#54d154";
    passwordLabel.style.color = "#54d154";

    passwordElement.style.border = "1px solid #54d154";

    document.getElementById("password-checkmark").style.opacity = "1";
    document.getElementById("password-xmark").style.opacity = "0";
  } else {
    passwordElement.style.color = "#ff0000";
    passwordLabel.style.color = "#ff0000";

    passwordElement.style.border = "1px solid #ff0000";

    document.getElementById("password-checkmark").style.opacity = "0";
    document.getElementById("password-xmark").style.opacity = "1";
  }
}

function checkForm() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let loginButton = document.getElementById("submit");

  if (username == "StudentIETI" && password == "IA2024-2025") {
    loginButton.style.backgroundColor = "green";
  } else {
    loginButton.style.backgroundColor = "red";
  }
}

function validate() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  if (username == "StudentIETI" && password == "IA2024-2025") {
    attempt = 3;
    document.getElementById("loader").style.visibility = "visible";
    setTimeout(login, 3000);
    return false;
  } else {
    attempt--;
    alert("You have left " + attempt + " attempt;");
    if (attempt == 0) {
      document.getElementById("username").disabled = true;
      document.getElementById("password").disabled = true;
      document.getElementById("submit").disabled = true;
      return false;
    }
  }
}

function login() {
  window.location = "../main-page/music.html";
}
