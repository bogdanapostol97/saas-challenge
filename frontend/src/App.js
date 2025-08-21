// --- ./frontend/src/App.js ---
// This is a simple React frontend that calls the backend API and displays a greeting.
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  // The useEffect hook runs once when the component mounts.
  useEffect(() => {
    // We'll call the backend API hosted at the root path of our backend container.
    // The Docker setup will handle the routing.
    fetch('/api')
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>SaaS Dashboard</h1>
        <p>This is a simple React application running in a Docker container.</p>
        <p>Backend response: <strong>{message || 'Loading...'}</strong></p>
      </header>
    </div>
  );
}

export default App;
