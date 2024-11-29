document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the form data
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Clear any previous error messages
    document.getElementById('error-message').innerText = '';

    // Simple validation to check if fields are empty
    if (username === '' || password === '') {
        document.getElementById('error-message').innerText = 'Both fields are required.';
        return;
    }

    // Simulate a simple username and password check (you would usually check this on a server)
    if (username === 'user@example.com' && password === 'password123') {
        // Redirect to homepage (or dashboard, etc.)
        window.location.href = '/project1-zomato/index.html';
    } else {
        document.getElementById('error-message').innerText = 'Invalid username or password.';
    }
});
