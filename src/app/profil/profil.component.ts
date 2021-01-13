import { Component, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { BddserviceService } from "../bddservice.service";
import { map } from 'rxjs/operators';
import { Utilisateur } from './profil.utilisateur.model';
import { AppComponent } from '../app.component';
import { Allergenes } from "./allergenes";
@Component({
  selector: "app-profil",
  templateUrl: "./profil.component.html",
  styleUrls: ["./profil.component.css"]
})
export class ProfilComponent implements OnInit {
  utilisateur=new Utilisateur();
  nom:string;
  prenom:string;
  email:string;
  mdp:string;
  allerg: [{id:number,nom:string}];
  //allerg = [{ id: 1, nom: "lactose" }];
  constructor(private http:HttpClient,private appc:AppComponent) {}
  Allergenes = Allergenes;
  public changeName() {
    var valeur = prompt("Entrez le nouveau nom");
    this.nom = valeur;
    this.changeIntoDB();
  }
  public changeFirstName(){
    var valeur = prompt("Entrez le nouveau prénom");
    this.prenom = valeur;
    this.changeIntoDB();
  }
  public changeMail() {
    var valeur = prompt("Entrez la nouvelle adresse mail");
    this.email = valeur;
    this.changeIntoDB();
  }
  public changeMDP() {
    var valeur = prompt("Entrez le nouveau mot de passe");
    this.mdp = valeur;
    this.changeIntoDB();
  }
  public async changeIntoDB(){
    //
    //https://us-central1-projet-tuteure-42fc0.cloudfunctions.net/app/api/users/
    const data = await this.http.put('http://localhost:3000/api/users/'+this.appc.id, {
        prenom:this.prenom,
        nom:this.nom,
        email:this.email,
        mdp:this.mdp,
        allergenes:this.allerg
      
    }).subscribe({
      error: error => {
          console.error('There was an error!', error);
      }
  });
  }
  selectedAlg: any;
  public Ajoutallerg() {
    /*var nom = "gluten";
    var id = 2;
    this.allerg.push({ id, nom });*/
    for(let key in Allergenes){
      if(Allergenes[key]["id"]==this.selectedAlg)
      {
        var id = Allergenes[key]["id"];
        var nom = Allergenes[key]["nom"];
        var allergadded=false;
        for(let key2 in this.allerg)if(this.allerg[key2]["id"]==id)allergadded=true;
        if(allergadded==false)this.allerg.push({id, nom });
      }
    }
    this.changeIntoDB();
  }

  
  getSelectedSkill() {
    console.log(this.selectedAlg);
  }
  async ngOnInit() {
    console.log("L'id est "+this.appc.id);
    //http://localhost:3000/api/users
    //https://firestore.googleapis.com/v1/projects/projet-tuteure-42fc0/databases/(default)/documents/listes
    const data = await this.http.get('https://us-central1-projet-tuteure-42fc0.cloudfunctions.net/app/api/users', {
        responseType: "json"
      }).toPromise();
    console.log(data);
    for(let key in data){
      if(data[key]["id"]==this.appc.id){
        (this.utilisateur = {
          id: data[key]["data"]["id"],
          nom: data[key]["data"]["nom"],
          prenom: data[key]["data"]["prenom"],
          email: data[key]["data"]["email"],
          mdp: data[key]["data"]["mdp"],
          allerg: data[key]["data"]["allergenes"]
        });
      }
    }
    
    Promise.resolve(this.utilisateur).then(value => {
      this.nom=value.nom;
      this.prenom=value.prenom;
      this.email=value.email;
      this.allerg=value.allerg;
      this.appc.allerg=value.allerg;
    })


  }
}
