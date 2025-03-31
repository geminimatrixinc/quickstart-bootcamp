document.addEventListener('DOMContentLoaded', () => {
    debugger
  
    let totalPrice = 0;
    const itemPrice = 1.00; // Fixed price for the generic item


    // attach event listener to the add button
    const addButton = document.querySelector('#btnAdd');

    addButton.addEventListener('click', () => {
        totalPrice += itemPrice;
        updateTotal();
    });



    function updateTotal() {
        debugger
        const totalDisplay = document.getElementById('total');
        totalDisplay.textContent = `$${totalPrice.toFixed(2)}`;
    }
});
