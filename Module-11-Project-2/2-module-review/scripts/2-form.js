document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    document.getElementById("output").textContent = `Hello, ${username}!`;
});
