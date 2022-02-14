const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || "8000";

app.get("/", (req, res) => {
  res.status(200).send("WHATABYTE: Food For Devs");
});

app.get("/main", (req, res) => {
  res.render('main/index');
});


app.set('view engine', 'ejs');
app.use(express.static('public'));


app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});
