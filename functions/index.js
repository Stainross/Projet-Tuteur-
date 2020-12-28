const functions = require('firebase-functions');
const express = require('express');
var db = require("../src/app/database.js")
const PORT = 3000;
const app = express();
/* JSON body parse*/
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    //http://localhost:5000
    res.setHeader('Access-Control-Allow-Origin', 'https://projet-tuteure-42fc0.web.app');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
app.get('/api/users', (req, res, next) => {
console.info('/api/users call success ');
//res.send('Utilisateurs');
var sql = "select * from utilisateur"
    var params = []
    db.all(sql, params, (err, rows) => {
        if (err) {
          //res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            "message":"success",
            "data":rows
        })
      });

});
app.get('/api/listes', (req, res, next) => {
    console.info('/api/users call success ');
    //res.send('Listes');
    var sql = "select * from liste"
    var params = []
    db.all(sql, params, (err, rows) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            "message":"success",
            "data":rows
        })
      });
    });

app.listen(PORT, () => {
console.info('Server is running on PORT:', PORT);
});
exports.app = functions.https.onRequest(app);
