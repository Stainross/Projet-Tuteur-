var sqlite3 = require('sqlite3').verbose()
var md5 = require('md5')

const DBSOURCE = "db.sqlite"

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      // Cannot open database
      console.error(err.message)
      throw err
    }else{
        console.log('Connected to the SQLite database.')
        db.run(`CREATE TABLE utilisateur (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nom text,
            prenom text, 
            email text UNIQUE, 
            mdp text, 
            CONSTRAINT email_unique UNIQUE (email)
            );`,
        (err) => {
            if (err) {
                // Table already created
            }else{
                // Table just created, creating some rows
                var insert = 'INSERT INTO utilisateur (nom, prenom, email, mdp) VALUES (?,?,?,?)'
                db.run(insert, ["adminSafsaf","adminSofyann","admin@example.com",md5("admin123456")])
                db.run(insert, ["lastname","firstname","user@example.com",md5("user123456")])
            }
        }); 
        db.run(`CREATE TABLE liste (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            barcode text,
            idfamille text
            )`,
        (err) => {
            if (err) {
                // Table already created
            }else{
                // Table just created, creating some rows
                var insert = 'INSERT INTO liste (barcode,idfamille) VALUES (?,?)'
                db.run(insert, ["tedsdef","1"])
                db.run(insert, ["dergrdesder","2"])
            }
        }); 
        

    }
});


module.exports = db