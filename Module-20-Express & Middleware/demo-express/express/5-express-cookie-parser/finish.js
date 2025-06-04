const express = require('express');
const app = express();
const port = 3025;

app.get('/set-cookie', (req, res) => {
    // Setting a cookie named 'username' with a value 'JohnDoe'
    res.cookie('username', 'JohnDoe', {
        maxAge: 86400000, // Cookie expires in 24 hours
        httpOnly: true, // Cookie is not accessible via client-side script
        secure: true // Cookie will be sent only over HTTPS
    });

    res.send('Cookie has been set');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
