document.getElementById("fetchRepos").addEventListener("click", () => {
    const username = document.getElementById("username").value;
    const url = `https://api.github.com/users/${username}/repos`;

    fetch(url, {
        method: "GET",
        headers: {
            "Authorization": "Bearer YOUR_GITHUB_API_KEY",
            "Accept": "application/vnd.github.v3+json"
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Failed to fetch repositories");
        }
        return response.json();
    })
    .then(data => {
        const repoList = document.getElementById("repoList");
        repoList.innerHTML = "";
        data.forEach(repo => {
            const li = document.createElement("li");
            li.textContent = repo.name;
            repoList.appendChild(li);
        });
    })
    .catch(error => {
        document.getElementById("repoList").innerHTML = `<li>${error.message}</li>`;
    });
});
