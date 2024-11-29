document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the form data
    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Clear any previous error messages
    document.getElementById('error-message').innerText = '';

    // Simple validation checks
    if (fullname === '' || email === '' || password === '' || confirmPassword === '') {
        document.getElementById('error-message').innerText = 'All fields are required.';
        return;
    }

    if (password !== confirmPassword) {
        document.getElementById('error-message').innerText = 'Passwords do not match.';
        return;
    }

    if (password.length < 6) {
        document.getElementById('error-message').innerText = 'Password must be at least 6 characters long.';
        return;
    }

    // If all validations pass, simulate successful signup
    alert('Signup successful!');
    window.location.href = '/project1-zomato/Login.html'; // Redirect to login page
});
