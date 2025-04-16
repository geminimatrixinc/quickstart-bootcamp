document.getElementById("userForm").addEventListener("submit", function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    const username = document.getElementById("username").value;
    document.getElementById("output").textContent = `Hello, ${username}!`;
});
