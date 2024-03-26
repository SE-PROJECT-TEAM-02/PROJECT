import React, { useState, useEffect } from 'react';


function App() {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    // Make a GET request to your Node.js server endpoint
    fetch('http://localhost:5000/home')
      .then(response => response.text())
      .then(data => {
        // Set the HTML content received from the server
        setHtmlContent(data);
      })
      .catch(error => {
        console.error('Error fetching HTML content:', error);
      });
  }, []);

  return (
    <div>
      {/* Render the HTML content */}
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
}

export default App;
