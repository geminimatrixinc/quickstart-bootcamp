
// Task Description: Adding a Loading Label to the Shopping Cart

// Objective:


// Use a loading label to indicate a processing state when adding items to the cart.

// Task Steps:

// Setup Initial UI:
// - Include a button to add items to the cart.
// - Display a total price that updates when items are added.
// - Include a loading label that is hidden by default and visible during the item addition process.

// Simulate Asynchronous Operation:

// - Display the loading label when the add button is clicked.
// - Use setTimeout to simulate a delay, representing a server request.
// - Hide the loading label and update the total price once the operation completes.

// Update the Total Price:

// - Calculate and display the updated total price after the simulated delay.

// original
window.onload = function() { 
    console.log(`The page has been loaded`);
}


document.addEventListener('DOMContentLoaded', () => {
    let totalPrice = 0;
    const itemPrice = 10.00; // Fixed price for each item
    const addButton = document.querySelector('.add');
    const loadingLabel = document.querySelector('.loading');
    const totalDisplay = document.getElementById('total');

    addButton.addEventListener('click', () => {
        loadingLabel.style.display = 'block'; // Show loading label

        // Simulate server processing delay
            // Simulate server processing delay
            setTimeout(() => {
                totalPrice += itemPrice; // Update total price
                updateTotal(); // Update UI
                loadingLabel.style.display = 'none'; // Hide loading label
            }, 2000); // Simulate a 2-second delay
       
    });

    function updateTotal() {
        totalDisplay.textContent = `$${totalPrice.toFixed(2)}`;
    }
});
