var sqlite3=require("sqlite3").verbose();
var db=new sqlite3.Database(__dirname+'./bdd.db');

function creerBdd(){
    db.serialize(function(){
        db.run("CREATE TABLE utilisateur(nom TEXT, prenom TEXT)");
    })
    db.close();
}