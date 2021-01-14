const admin=require('firebase-admin');
const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
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
app.use(cors({ origin: true }));
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
app.get('/api/users/:userId', async (req,res) => {

    const userId = req.params.userId; 
    db.collection('utilisateurs').doc(userId).get()
    .then(user => {
        if(!user.exists) throw new Error('User not found');
        res.status(200).json({id:user.id, data:user.data()});
        return null;
    })
    .catch(error => res.status(500).send(error));
        
});
app.put('/api/users/:userId', async (req, res) => {
    await db.collection('utilisateurs').doc(req.params.userId).set(req.body,{merge:true})
    .then(()=> res.json({id:req.params.userId}))
    .catch((error)=> res.status(500).send(error))

});
app.get('/api/listes/:prodId', async (req,res) => {

    const prodId = req.params.userId; 
    db.collection('listes').doc(prodrId).get()
    .then(prod => {
        if(!prod.exists) throw new Error('Product not found');
        res.status(200).json({id:prod.id, data:prod.data()})
        return null;
    })
    .catch(error => res.status(500).send(error));
        
});
app.delete('/api/listes/:prodId', (req, res) => {
    db.collection("listes").doc(req.params.prodId).delete()
    .then(()=>res.status(204).send("Document successfully deleted!"))
    .catch(function (error) {
            res.status(500).send(error);
    });
})
app.post('/api/listes',async (req,res)=>{
    try{
        const query= db.collection("listes").where("barcode", "==", req.body.barcode).where("idfamille", "==", req.body.idfamille);
        query.get().then(function(querySnapshot) {
            if (querySnapshot.empty) {
                const userQuerySnapshot=db.collection('listes').add({barcode:req.body.barcode,idfamille:req.body.idfamille})
                .then(function(docRef){
                    console.log("Document écrit avec l'id: ",docRef.id);
                    return null;
                })
                .catch(function(error){
                    console.error("Erreur d'ajout ",error);
                });
            } else {
                console.log("Produit déjà dans la liste");
                alreadyadded=true;
            }
            return null;
        }).catch(error=>{
            console.error(error);
            res.error(500);
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

  app.post('/api/users',async (req,res)=>{
    try{
        const query= db.collection("utilisateurs").where("email", "==", req.body.email);
        query.get().then(function(querySnapshot) {
            if (querySnapshot.empty) {
                const userQuerySnapshot=db.collection('utilisateurs').add({email:req.body.email,mdp:req.body.mdp,nom:req.body.nom,prenom:req.body.prenom,allergenes:[],idfamille:0})
                .then(function(docRef){
                    console.log("Document écrit avec l'id: ",docRef.id);
                    return null;
                })
                .catch(function(error){
                    console.error("Erreur d'ajout ",error);
                });
            } else {
                console.log("Email déjà utilisé");
                alreadyadded=true;
            }
            return null;
        }).catch(error=>{
            console.error(error);
            res.error(500);
        });
        
    }catch(error){
        console.error("Erreur");
    }
});


app.listen(PORT, () => {
console.info('Server is running on PORT:', PORT);
});
exports.app = functions.https.onRequest(app);
