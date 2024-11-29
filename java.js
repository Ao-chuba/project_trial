// Handle focus on the search input
const searchInput = document.querySelector('input');

searchInput.addEventListener('focus', () => {
    if (searchInput.placeholder === "Search for restaurant,cuisine or a dish") {
        searchInput.placeholder = "";
    }
});

searchInput.addEventListener('blur', () => {
    if (searchInput.placeholder === "") {
        searchInput.placeholder = "Search for restaurant,cuisine or a dish";
    }
});

document.addEventListener("mousemove", function(event) {
    // Get the mouse cursor position
    const cursor = document.querySelector(".custom-cursor");
    cursor.style.left = `${event.pageX - 10}px`; // Adjust the cursor position
    cursor.style.top = `${event.pageY - 10}px`;
});

// Add mouseenter and mouseleave events for interactive elements
document.querySelectorAll('a, button, .food-delivery .info-box').forEach(item => {
    item.addEventListener('mouseenter', () => {
        // When hovering over a link or button, change cursor style
        document.body.style.cursor = 'url("https://cdn-icons-png.flaticon.com/512/149/149071.png"), auto'; // Custom cursor
    });

    item.addEventListener('mouseleave', () => {
        // Reset cursor when leaving the element
        document.body.style.cursor = 'auto'; // Default cursor
    });
});

// Optional: Change cursor for specific elements
document.querySelector('.food-delivery .info-box').addEventListener('mouseenter', () => {
    // When hovering over the delivery info boxes, change the cursor
    document.body.style.cursor = 'url("https://cdn-icons-png.flaticon.com/512/149/149071.png"), auto'; 
});

document.querySelector('.food-delivery .info-box').addEventListener('mouseleave', () => {
    // Reset the cursor after leaving
    document.body.style.cursor = 'auto';
});



