

document.addEventListener("DOMContentLoaded", function() {

  const button = document.getElementById("button-search");

  button.addEventListener("click", function() {
    alert('Button clicked!');
    // fetch api call here
  });

    const input = document.getElementById("input-search");  

    input.addEventListener("keyup", function(event) {
      if (event.key === "Enter") {
        alert('Enter key pressed!');
      }
    })
    
})