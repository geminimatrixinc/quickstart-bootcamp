

document.addEventListener("DOMContentLoaded", function() {
  const button = document.getElementById("button-search");

  button.addEventListener("click", function() {
    console.log('Button clicked!');
    fetchData();
  });

    const input = document.getElementById("input-search");  

    input.addEventListener("keydown", function(event) {
      if (event.key === "Enter" || event.keyCode === 13) {
        console.log('Enter key pressed!');
        fetchData();
      }
      // ignore other keys
      else {
        console.log('Other key pressed!');
      }
    })
})

async function fetchData() {
  debugger
  const input = document.getElementById("input-search");  
  const searchTerm = input.value;
  if(!searchTerm) {
    alert("Search term is empty.");
    return;
  }
  const url = `https://api.github.com/search/repositories?q=${searchTerm}`;

  try {
    const response = await fetch(url, {
      headers: {
        Accept: "application/vnd.github.v3+json"
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data); // Logs the repository data
    
    // display data in the HTML

  } catch (error) {
      console.error("Error fetching data:", error);
  }
}
