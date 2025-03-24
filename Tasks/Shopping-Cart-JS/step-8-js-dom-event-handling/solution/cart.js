document.addEventListener('DOMContentLoaded', () => {
    debugger
  
    let totalPrice = 0;
    const itemPrice = 1.00; // Fixed price for the generic item


    const addButton = document.querySelector('.add');

    addButton.addEventListener('click', () => {
        totalPrice += itemPrice;
        updateTotal();
    });

    const totalDisplay = document.getElementById('total');
    function updateTotal() {
        debugger
        totalDisplay.textContent = `$${totalPrice.toFixed(2)}`;
    }
});
