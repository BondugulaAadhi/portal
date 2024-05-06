function validateAdmin() {
    var username = document.getElementById('adminUsername').value;
    var password = document.getElementById('adminPassword').value;
    // Add your authentication logic here
    // For example, check if username and password match the admin credentials
    if (username === "aa" && password === "a") {
        // Redirect to the admin panel page
        window.location.href = "admin_panel.html";
    } else {
        alert("Invalid username or password. Please try again.");
    }
}
