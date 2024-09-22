const cors = require('cors');
const express = require('express');
const app = express();

// Allow requests from your frontend URL
app.use(cors({
  origin: 'http://3.88.239.214:80',
}));

// Rest of your server setup

// Middleware to parse JSON
app.use(express.json());

// Sample route
app.get('/products', (req, res) => {
  res.json({ message: 'Product list' });
});

// Define the port the server will listen on
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

