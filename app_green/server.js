const express = require('express');
const app = express();
const port = 8082;

app.get('/version', (req, res) => {
    res.send('Green version 1.0.0');
});

app.listen(port, () => console.log(`App Green running on port ${port}`));
