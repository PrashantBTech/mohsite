function talkWithMoh() {
    document.body.style.backgroundColor = "#1e1e2f";
    alert("Voice feature is coming soon!");
    setTimeout(() => {
        document.body.style.backgroundColor = "#0b0b16";
    }, 1000);
}

function chatWithMoh() {
    alert("Chat feature is in development.");
}

function searchByImage() {
    alert("Image search feature coming soon!");
}
window.onload = function () {
    const username = localStorage.getItem("username");
    const authButton = document.getElementById("authButton");

    if (username) {
        // Display username
        document.getElementById("userNameDisplay").textContent = username;

        // Change "Login/Signup" to "Logout"
        authButton.innerHTML = '<a href="#" id="logoutBtn">Logout</a>';

        // Add logout functionality
        document.getElementById("logoutBtn").addEventListener("click", function () {
            localStorage.removeItem("username"); // Clear user data
            location.reload(); // Refresh the page
        });
    }
};
// Toggle Nav Links on Hamburger Click
document.querySelector('.hamburger').addEventListener('click', function () {
    document.querySelector('.nav-links').classList.toggle('active');
});
// Handle Login Form Submission
document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent page refresh on form submission

    const username = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Basic validation (you can expand this as needed)
    if (username && email && password) {
        // Store username in localStorage
        localStorage.setItem("username", username);

        // Redirect back to the homepage after successful login
        window.location.href = "index.html";
    } else {
        alert("Please fill in all fields.");
    }
});
// Display the username when the page loads

