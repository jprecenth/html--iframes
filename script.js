
// Theme toggle
const toggle = document.getElementById('theme-toggle');
if (toggle) {
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');
  });
}

// Byta innehåll i iframe
function changeContent(page) {
  parent.document.querySelector('iframe:nth-child(2)').src = page;
}

// Alert om man inte är inloggad
function loginFirst() {

    if (!window.parent.loggedInName){
        alert("Du måste logga in för att komma åt forumet!");
    }
    else {
        changeContent('forum.html');
    }
}

// Konto skapat
function accountCreated() {
  const username = document.getElementById('username').value;
  localStorage.setItem('username', username);
  alert("Hej " + username + "!");
}

// Logga in
function signIn() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value; 

  localStorage.setItem("loggedInUser", username);
  window.parent.loggedInName = username;

  console.log("Inloggad som: " + username);

  changeContent('profile.html');
  accountName();
}

// Logga ut
function logOut() {
  localStorage.removeItem('loggedInUser');
  window.parent.loggedInName = null;
  changeContent("login.html");
}

// När profil laddas
function onProfileLoad() {
  var username = window.parent.loggedInName;
  document.querySelectorAll(".usernamePlaceholder").forEach((element) => {
    element.textContent = username;
  })
}

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login");
  const logoutSection = document.getElementById("logoutSection");
  const loggedInNameSpan = document.getElementById("loggedInUserName");

  if (loginForm) {
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (loggedInUser) {
      // Dölj loginformuläret
      loginForm.style.display = "none";

      // Visa logout-sektionen med användarnamnet
      if (logoutSection) {
        logoutSection.style.display = "block";
        if (loggedInNameSpan) loggedInNameSpan.textContent = loggedInUser;
      }
    } else {
      // Koppla formuläret till signIn()
      loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        signIn();
      });
    }
  }
});

// Icon spin
function iconSpin() {
  let x = document.getElementById("icon");
  x.style.animationName = "iconAnimation";
  setTimeout(() => {
    x.style.animationName = "none";
  }, 2500)
}

// Scroll till toppen
 function scrollUp() {
          document.documentElement.scrollTop = 0;
    }

// Only show upp-knapp längre ned
function scrollFunction() {
  if (document.documentElement.scrollTop > 20) {
    let upp = document.getElementById("upp");
    upp.style.opacity = "100";
  } else {
    upp.style.opacity = "0";
  }
}

window.onscroll = scrollFunction;