// --- ./backend/server.js ---
// This is a simple Node.js Express backend that serves a JSON greeting.
const express = require('express');
const app = express();
const port = 3001; // The backend will run on port 3001 inside the container.

// Enable CORS for the frontend to be able to make requests.
const cors = require('cors');
app.use(cors());

// Serve static React files in production.
app.use(express.static('build'));

// Define the API endpoint.
app.get('/api', (req, res) => {
  // This is the message we'll send back to the frontend.
  res.json({ message: 'Hello from the backend API!' });
});

// Start the server.
app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`);
});