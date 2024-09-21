// Again, needed something to test with (base mockup code). 
//HTML File

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Page</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h2>Login</h2>
        <form id="loginForm">
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required>
            <button type="submit">Login</button>
        </form>
        <p>Don't have an account? <a href="#" id="createAccountLink">Create an account</a></p>
    </div>

    <div class="container" id="createAccountContainer" style="display: none;">
        <h2>Create Account</h2>
        <form id="createAccountForm">
            <label for="newUsername">Username:</label>
            <input type="text" id="newUsername" name="newUsername" required>
            <label for="newPassword">Password:</label>
            <input type="password" id="newPassword" name="newPassword" required>
            <button type="submit">Create Account</button>
        </form>
        <p>Already have an account? <a href="#" id="loginLink">Login</a></p>
    </div>

    <script src="script.js"></script>
</body>
</html>

// Basic CSS (Basic styling). 

body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

.container {
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 300px;
    text-align: center;
}

h2 {
    margin-bottom: 20px;
}

label {
    display: block;
    margin-bottom: 5px;
}

input {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
}

button {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 3px;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}

p {
    margin-top: 10px;
}

// Actual portion and functionality required to operate the login page using JavaScript: 
document.getElementById('createAccountLink').addEventListener('click', function() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('createAccountContainer').style.display = 'block';
});

document.getElementById('loginLink').addEventListener('click', function() {
    document.getElementById('createAccountContainer').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    alert(`Logged in as ${username}`);
});

document.getElementById('createAccountForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;
    alert(`Account created for ${newUsername}`);
});

// Provides basic login page - can switch between logging in and creating an account. 
// JS done here handles form submissions (we also need somewhere to store all the data such as passwords, etc. in a database, will come to backend later on, SQL, ...) as well as displaying alerts (demonstration purposes while working and doing so). 
// Of course, later in the course of this, we can expand on top of this and add more functionalities such as form validation, storing user data, and definitely integrating with a backend server, as well as ensuring the site is secure!!!  

