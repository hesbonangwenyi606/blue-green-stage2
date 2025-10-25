const express = require('express');
const app = express();

// Use hardcoded port or fallback
const PORT = process.env.PORT || 8081;

app.get('/', (req, res) => {
  res.send(`Hello from ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
