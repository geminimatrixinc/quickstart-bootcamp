document.addEventListener("DOMContentLoaded", function() {
  const button = document.getElementById("button-search");
  const resultsContainer = document.createElement("div");
  resultsContainer.className = "container mt-4";
  resultsContainer.id = "results-container";
  document.body.appendChild(resultsContainer);

  button.addEventListener("click", function() {
    fetchData();
  });

  const input = document.getElementById("input-search");  
  input.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
      fetchData();
    }
  });
});

async function fetchData() {
  const input = document.getElementById("input-search");  
  const searchTerm = input.value.trim();

  if (!searchTerm) {
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
    displayResults(data.items);

  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function displayResults(repositories) {
  const resultsContainer = document.getElementById("results-container");
  resultsContainer.innerHTML = ""; // Clear previous results

  if (repositories.length === 0) {
    resultsContainer.innerHTML = "<p class='text-center text-warning'>No repositories found.</p>";
    return;
  }

  const row = document.createElement("div");
  row.className = "row";

  repositories.slice(0, 10).forEach(repo => {
    const col = document.createElement("div");
    col.className = "col-md-4 mb-3";

    col.innerHTML = `
      <div class="card h-100 bg-secondary text-light">
        <div class="card-body">
          <h5 class="card-title">${repo.name}</h5>
          <p class="card-text">${repo.description ? repo.description : "No description available"}</p>
          <p><strong>Stars:</strong> ${repo.stargazers_count}</p>
          <a href="${repo.html_url}" target="_blank" class="btn btn-primary">View Repository</a>
        </div>
      </div>
    `;

    row.appendChild(col);
  });

  resultsContainer.appendChild(row);
}
