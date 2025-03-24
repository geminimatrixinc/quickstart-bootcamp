document.addEventListener('DOMContentLoaded', () => {
    let totalPrice = 0;
    const itemPrice = 10.00; // Fixed price for each item
    const addButton = document.querySelector('.add');
    const loadingLabel = document.querySelector('.loading');
    const totalDisplay = document.getElementById('total');

    addButton.addEventListener('click', () => {
        loadingLabel.style.display = 'block'; // Show loading label

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
