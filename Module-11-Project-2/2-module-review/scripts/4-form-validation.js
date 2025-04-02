document.getElementById("validationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const emailError = document.getElementById("emailError");

    if (!email.includes("@")) {
        emailError.textContent = "Invalid email format.";
    } else {
        emailError.textContent = "";
        alert("Form submitted successfully!");
    }
});
