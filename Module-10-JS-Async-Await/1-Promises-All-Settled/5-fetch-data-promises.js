function loadContent(url) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Data received:', data);
        })
        .catch(error => {
            console.error('Problem with fetch operation:', error);
        });
}

loadContent('https://api.example.com/data');
