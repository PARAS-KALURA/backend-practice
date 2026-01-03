// dynamic routing

const express = require('express');
const app = express();

const PORT = 3000;

app.set("view engine", "ejs");
app.use(express.static('./public'));

app.get('/', function (req, res){
  res.render("index", {age: 12});
})

app.get('/error', function (req, res, next) {
  next(new Error("Something went wrong"));
});


app.get('/contact', function (req, res){
  res.render("contact", {name: "Paras Kalura"});
} )

app.use(function errorHandler (err, req, res, next) {
  if (res.headersSent) {
    return next(err)
  }
  res.status(500)
  res.render('error', { error: err })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});