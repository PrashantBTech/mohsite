document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Simple validation (can be expanded)
    if (name && email && password) {
        // Save the user's name in local storage
        localStorage.setItem("username", name);

        // Redirect to the previous page
        window.history.back();
    } else {
        alert("Please fill in all fields.");
    }
});
