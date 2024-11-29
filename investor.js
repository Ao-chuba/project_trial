// Toggle visibility of stock information
document.getElementById('show-stock').addEventListener('click', function() {
    var stockInfo = document.getElementById('stock-info');
    if (stockInfo.style.display === "none") {
        stockInfo.style.display = "block";
    } else {
        stockInfo.style.display = "none";
    }
});

// Form submission logic
document.getElementById('investor-contact-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the default form submission
    
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Display form data (this can be replaced with actual form handling logic)
    alert('Thank you for contacting us, ' + name + '! We will respond to ' + email + ' shortly.');
});
