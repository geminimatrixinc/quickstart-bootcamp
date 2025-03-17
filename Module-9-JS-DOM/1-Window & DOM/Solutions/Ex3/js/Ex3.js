function displayAlert()
{
    window.alert("Hi, This is an alert box.");
}
function displayPrompt()
{
    window.prompt("Hi, this is a prompt box")
}
function displayConfirm()
{
    if(window.confirm("Do you really want to close the browser ?")) {
        window.close();
    }
}