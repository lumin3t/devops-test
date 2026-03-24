// server.js
const express = require('express');
const app = express();
const port = process.env.PORT ||3000;
const path = require('path');

app.use(express.static(path.join(__dirname, 'public'))); //middleware for public static folder

app.get('/api', (req, res) => {
  res.send('Hello from backend!');
});

// This check ensures the server only starts if run directly, 
// not when imported by a test file.
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

module.exports = app;
