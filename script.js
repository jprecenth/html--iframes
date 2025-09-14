
    function changeContent(page) {
        // Get the parent window and change the content iframe source
        parent.document.querySelector('iframe:nth-child(2)').src = page;
    }

    function loginFirst() {
        // Alert user to log in
        alert("Du måste logga in för att komma åt forumet!");
    }

    function accountCreated() {
        // Alert user account was created
        alert("Konto skapat! Använd ditt användarnamn och lösenord för att logga in!");
    }

    function signIn() {
        window.parent.loggedInName = document.getElementById("username").value;
        changeContent('profile.html');
        //accountName();
    }

    function onProfileLoad() {
        var username = window.parent.loggedInName;
        document.querySelectorAll(".usernamePlaceholder").forEach((element) => {
            element.textContent = username;
        })
    }

