document.getElementById("triggerError").addEventListener("click", () => {
    try {
        let result = undefinedFunction(); // This function does not exist
    } catch (error) {
        document.getElementById("errorMessage").textContent = `Error: ${error.message}`;
    }
});
