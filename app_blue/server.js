const express = require('express');
const app = express();
const port = 8081;

app.get('/version', (req, res) => {
    res.send('Blue version 1.0.0');
});

app.listen(port, () => console.log(`App Blue running on port ${port}`));
