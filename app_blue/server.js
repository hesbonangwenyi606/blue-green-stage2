const express = require('express');
const app = express();
const PORT = process.env.PORT || 8081;

app.get('/version', (req, res) => {
  res.set('X-App-Pool', 'blue');
  res.set('X-Release-Id', process.env.RELEASE_ID_BLUE || 'blue-v1.0.0');
  res.json({ version: 'blue' });
});

app.get('/healthz', (req, res) => res.send('ok'));

app.post('/chaos/start', (req, res) => {
  setTimeout(() => {}, 10000); // simulate downtime
  res.send('chaos started');
});

app.post('/chaos/stop', (req, res) => res.send('chaos stopped'));

app.listen(PORT, () => console.log(`Blue app running on port ${PORT}`));
