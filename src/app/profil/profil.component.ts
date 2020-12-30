import { Component, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { BddserviceService } from "../bddservice.service";
import { map } from 'rxjs/operators';
import { Utilisateur } from './profil.utilisateur.model';
import { AppComponent } from '../app.component';
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
  constructor(private http:HttpClient,private appc:AppComponent) {}

  async ngOnInit() {
    console.log("L'id est "+this.appc.id);
    //
    //http://localhost:3000/api/users
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
          mdp: data[key]["data"]["mdp"]
        });
      }
    }
    
    Promise.resolve(this.utilisateur).then(value => {
      this.nom=value.nom;
      this.prenom=value.prenom;
      this.email=value.email;

    })


  }
}
