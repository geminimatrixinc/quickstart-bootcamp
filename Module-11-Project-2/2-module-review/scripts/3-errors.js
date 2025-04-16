document.getElementById("triggerError").addEventListener("click", () => {
    debugger
    let result = undefinedFunction();

    try {
        let result = undefinedFunction(); // This function does not exist
    } catch (error) {
        document.getElementById("errorMessage").textContent = `Error: ${error.message}`;
    }
});
