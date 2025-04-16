const fetchUser = () => {
    debugger
    const username = document.getElementById("username").value;
    const url = `https://api.github.com/users/${username}`;


    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("User not found");
            }
            return response.json();
        })
        .then(data => {
            // document.getElementById("output").innerHTML = `
            //     <h2>${data.name}</h2>
            //     <p><strong>Username:</strong> ${data.login}</p>
            //     <p><strong>Public Repos:</strong> ${data.public_repos}</p>
            //     <img src="${data.avatar_url}" width="100">
            // `;
            document.getElementById("output").innerHTML = 
                `<img src="${data.avatar_url}" width="500">`;
        })
        .catch(error => {
            document.getElementById("output").textContent = error.message;
        });
}


document.getElementById("fetchUser").addEventListener("click", fetchUser);
