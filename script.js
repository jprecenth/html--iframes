const toggle = document.getElementById('theme-toggle');
    toggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        document.body.classList.toggle('light-theme');
    });
    
    
    function changeContent(page) {
        // Get the parent window and change the content iframe source
        parent.document.querySelector('iframe:nth-child(2)').src = page;
    }

    function loginFirst() {
        // Alert user to log in
        alert("Du måste logga in för att komma åt forumet!");
    }

    function accountCreated() {
        const username = document.getElementById('username').value;
        localStorage.setItem('username', username);
        // Alert user account was created
        alert("Hej " + username + "!");
    }

        function signIn() {
          const username = document.getElementById('username').value;
          const password = document.getElementById('password').value; 
          localStorage.setItem("loggedInUser", username);

    window.parent.loggedInName = username;

    changeContent('profile.html');
    accountName();

    console.log("bajs");
}

function logOut() {
    localStorage.removeItem('loggedInUser');
    window.parent.loggedInName = null;
    changeContent("login.html");
}

    function onProfileLoad() {
        var username = window.parent.loggedInName;
        document.querySelectorAll(".usernamePlaceholder").forEach((element) => {
            element.textContent = username;
        })
    }

/* icon spinnyyyy */
    function iconSpin() {
      let x = document.getElementById("icon");
      x.style.animationName = "iconAnimation";
    }

/* scroll 2 top  */
    function scrollUp() {
          document.documentElement.scrollTop = 0;
    }
