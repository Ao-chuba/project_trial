document.getElementById('restaurant-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the form data
    const restaurantName = document.getElementById('restaurant-name').value;
    const restaurantType = document.getElementById('restaurant-type').value;
    const restaurantAddress = document.getElementById('restaurant-address').value;
    const restaurantPhone = document.getElementById('restaurant-phone').value;
    const restaurantCuisine = document.getElementById('restaurant-cuisine').value;

    // Simulate a form submission
    // Normally, you would send this data to the server here

    // Show success message
    document.getElementById('form-message').innerHTML = `
        <p style="color: green; font-weight: bold;">Restaurant ${restaurantName} has been successfully added!</p>
    `;

    // Optionally, clear the form
    document.getElementById('restaurant-form').reset();
});
