// dynamic routing

const express = require('express');
const app = express();

const PORT = 3000;

// GET - Read Data
app.get('/users', (req, res) => {
  res.send("Get all users");
});


// POST - Create Data
app.post('/users',(req, res) => {
  res.send("Create a new user");
});


// PUT- Update Data
app.put('/users/:username', (req, res) => {
  res.send(`Update User to: ${req.params.username}`);
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});