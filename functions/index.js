const admin=require('firebase-admin');
const functions = require('firebase-functions');
const express = require('express');

const PORT = 3000;
const app = express();
/* JSON body parse*/
const bodyParser = require('body-parser');
admin.initializeApp({
  apiKey: "AIzaSyCkilow6HKXzrmplX6ZQ3YGmpec_quDaiM",
  authDomain: "projet-tuteure-42fc0.firebaseapp.com",
  databaseURL: "https://projet-tuteure-42fc0-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "projet-tuteure-42fc0",
  storageBucket: "projet-tuteure-42fc0.appspot.com",
  messagingSenderId: "656839049499",
  appId: "1:656839049499:web:72d5553674fd473cd593be"
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function (req, res, next) {
    // Website you wish to allow to connecthttp://localhost:5000
    //
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
const db = admin.firestore();

app.get('/api/users', async (req, res) => {
  try {
      const userQuerySnapshot = await db.collection('utilisateurs').get();
      const users = [];
      userQuerySnapshot.forEach(
          (doc)=>{
              users.push({
                  id: doc.id,
                  data:doc.data()
          });
          }
      );
      res.status(200).json(users);
  } catch (error) {
      res.status(500).send(error);
  }
});
app.post('/api/listes',async (req,res)=>{
    try{
        const userQuerySnapshot=await db.collection('listes').add({barcode:req.body.barcode,idfamille:req.body.idfamille})
        .then(function(docRef){
            console.log("Document écrit avec l'id: ",docRef.id);
        })
        .catch(function(error){
            console.error("Erreur d'ajout ",error);
        });
    }catch(error){
        console.error("Erreur");
    }
});
app.get('/api/listes',async (req, res) => {
  try {
    const userQuerySnapshot = await db.collection('listes').get();
    const users = [];
    userQuerySnapshot.forEach(
        (doc)=>{
            users.push({
                id: doc.id,
                data:doc.data()
        });
        }
    );
    res.status(200).json(users);
} catch (error) {
    res.status(500).send(error);
}
  });
app.listen(PORT, () => {
console.info('Server is running on PORT:', PORT);
});
exports.app = functions.https.onRequest(app);
