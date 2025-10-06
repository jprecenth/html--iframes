
// Theme toggle
const toggle = document.getElementById('theme-toggle');
if (toggle) {
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');
  });
}

// MOBILE




// Byta innehåll i iframe
function changeContent(page) {
  parent.document.querySelector('iframe:nth-child(2)').src = page;
}

// Alert om man inte är inloggad
function loginFirst() {
  
  if (!window.parent.loggedInName){
    alert("Du måste logga in för att komma åt denna sida!");
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
  
  // Visa profil-länken i sidebar
  const sidebarDoc = window.parent.document.getElementById("ramEtt").contentDocument;
  const profileLink = sidebarDoc.getElementById("profileLink");
  const loginSignupDiv = sidebarDoc.querySelector(".loginSignup-div");
  
  if (profileLink) profileLink.style.display = "inline";
  if (loginSignupDiv) loginSignupDiv.style.display = "none";
  
  // Ladda profilen i ramTvå
  window.parent.document.getElementById("ramTvå").src = "profile.html";
}

// Logga ut
function logOut() {
  localStorage.removeItem('loggedInUser');
  window.parent.loggedInName = null;
  console.log("Utloggad");
  
  const sidebarDoc = window.parent.document.getElementById("ramEtt").contentDocument;
  const profileLink = sidebarDoc.getElementById("profileLink");
  const loginSignupDiv = sidebarDoc.querySelector(".loginSignup-div");
  
  if (profileLink) profileLink.style.display = "none";
  if (loginSignupDiv) loginSignupDiv.style.display = "block";
  
  // Gå till login
  window.parent.document.getElementById("ramTvå").src = "login.html";
}

// När profil laddas
function onProfileLoad() {
  var username = window.parent.loggedInName;
  document.querySelectorAll(".usernamePlaceholder").forEach((element) => {
    element.textContent = username;  
    
    console.log("Profil laddad för: " + username);
  })
}

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login");
  const logoutSection = document.getElementById("logoutSection");
  const loggedInNameSpan = document.getElementById("loggedInUserName");
  const loginRight = document.getElementById("loginRight");
  
  if (loginForm) {
    const loggedInUser = localStorage.getItem("loggedInUser");
    
    if (loggedInUser) {
      // Dölj loginformuläret
      loginForm.style.display = "none";
      
      // Visa logout-sektionen med användarnamnet
      if (logoutSection) {
        logoutSection.style.display = "block";
        loginRight.style.display = "none";
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

// Show more - Äldre Nyheter
function showMore() {
  let moreNewsContainer = document.getElementById("more-news");
  let moreNewsLink = document.getElementById("more-news-link");
  moreNewsContainer.style.display = "inline";
  moreNewsLink.style.display = "none"
}

// Card-popup på Pungråttor.html
function expandCard() {
  let cardPopup = document.getElementById("card-popup");
  cardPopup.style.visibility = "visible";
}

function closeCard() {
  let cardPopup = document.getElementById("card-popup");
  cardPopup.style.visibility = "hidden";
}

function showRight() {
  let secondImage = document.querySelector(".secondImg");
  let firstImage = document.querySelector(".firstImg");
  secondImage.style.display = "inline";
  firstImage.style.display = "none";
}

function showLeft() {
  let secondImage = document.querySelector(".secondImg");
  let firstImage = document.querySelector(".firstImg");
  secondImage.style.display = "none";
  firstImage.style.display = "inline";
}


// Synka sidomenyns iframe-höjd med innehållets faktiska höjd (+15px marginal)
function syncSidebarHeight() {
  const sidebarFrame = document.getElementById('ramEtt');
  if (!sidebarFrame) return; // inget iframe hittat
  
  const sidebarDoc = sidebarFrame.contentDocument || sidebarFrame.contentWindow.document;
  if (!sidebarDoc) return; // innehållet är inte redo än
  
  const sidebarBody = sidebarDoc.body;
  const requiredHeight = sidebarBody.scrollHeight + 15; // +15px extra utrymme nedåt
  sidebarFrame.style.height = `${requiredHeight}px`;
}

// Kör så fort sidomenyn laddats och uppdatera även när fönstret ändrar storlek
document.getElementById('ramEtt').addEventListener('load', () => {
  syncSidebarHeight();
  window.addEventListener('resize', syncSidebarHeight);
});

// Terms popup
let popup = document.getElementById("popup");
                    let overlay = document.getElementById("overlay");
                    const rule1 = document.getElementById("rule1");
                    const rule2 = document.getElementById("rule2");
                    const rule3 = document.getElementById("rule3");
                    const submitBtn = document.getElementById("submit");
                    
                    function openPopup() {
                        popup.classList.add("open-popup");
                        overlay.classList.add("show");
                    }
                    
                    function closePopup() {
                        if (rule1.checked && rule2.checked && rule3.checked) {
                            popup.classList.remove("open-popup");
                            overlay.classList.remove("show");
                        } else {
                            alert("Du måste godkänna alla punkter innan du kan använda sidan!");
                        }
                    }
                    
                    function checkAll() {
                        submitBtn.disabled = !(rule1.checked && rule2.checked && rule3.checked);
                    }
                    
                    rule1.addEventListener("change", checkAll);
                    rule2.addEventListener("change", checkAll);
                    rule3.addEventListener("change", checkAll);