const express = require('express');
const app = express();
const PORT = process.env.PORT || 8082;

app.get('/version', (req, res) => {
  res.set('X-App-Pool', 'green');
  res.set('X-Release-Id', process.env.RELEASE_ID_GREEN || 'green-v1.0.0');
  res.json({ version: 'green' });
});

app.get('/healthz', (req, res) => res.send('ok'));

app.post('/chaos/start', (req, res) => {
  setTimeout(() => {}, 10000); // simulate downtime
  res.send('chaos started');
});

app.post('/chaos/stop', (req, res) => res.send('chaos stopped'));

app.listen(PORT, () => console.log(`Green app running on port ${PORT}`));
