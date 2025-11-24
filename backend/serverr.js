//server.js
// backend/server.js
const express = require('express');
const cors = require('cors');
const notificationsRoute = require('./routes/notifications');

const app = express();

app.use(cors()); // This enables CORS for all origins
app.use(express.json());

app.use('/api/notifications', notificationsRoute);
app.listen(6000, '0.0.0.0', () => {
  console.log("Server running on port 6000");
});
