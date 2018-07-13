const getUserPortfolio = require("./user-portfolio");
var express = require('express');
var app = express();
var bodyParser = require('body-parser');


//To parse URL encoded data
app.use(bodyParser.urlencoded({ extended: false }));

//To parse json data
app.use(bodyParser.json());

app.use(express.static('public'));

app.set('view engine', 'ejs');

async function loadPortfolio (id) {
  return await getUserPortfolio(id);
}

app.get("/", (req, res) => {
  loadPortfolio(1)
  .then(portfolio => res.render('main', { portfolio }));
});

app.get("/:userId", async (req, res) => {
  debugger;
  const userId = Number(req.params.userId) < 4 ? Number(req.params.userId) : 1;
  loadPortfolio(userId)
  .then(portfolio => res.render('main', { portfolio }));
});


var listener = app.listen(55688, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});