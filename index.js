const express = require("express");
const app = express();

const PORT = 3000;

app.use(express.json()); // 👈 MUST be before routes
app.use(express.urlencoded({ extended: true }));


app.post("/user", (req, res) => {
  console.log(req.body);
  res.send("User received");
});

app.listen(PORT, () => {
  console.log(`Server is running: ${PORT}`);
});
