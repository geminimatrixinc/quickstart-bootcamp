
// Task - Rewrite all this code using ES6 syntax and features

var cart = [
        { id: 1, name: "apple", price: 2.99 }, 
        { id: 2, name: "orange", price: 1.88},
    ]; // array of items in the cart

function addToCart(item) {
  cart.push(item); // add item to the items array
}

var removeFromCart = function (item) {
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id === item.id) {
            cart.splice(i, 1); 
            break;
        }
    }
}

addToCart({ id: 3, name: "banana", price: 0.99 }); // add an item to the cart
removeFromCart({ id: 2, name: "orange", price: 1.88 }); // remove an item from the cart

console.log(cart); // print the cart