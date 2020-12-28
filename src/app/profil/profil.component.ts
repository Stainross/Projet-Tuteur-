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
    (this.utilisateur = {
      id: data["data"][this.appc.id]["id"],
      nom: data["data"][this.appc.id]["nom"],
      prenom: data["data"][this.appc.id]["prenom"],
      email: data["data"][this.appc.id]["email"],
      mdp: data["data"][this.appc.id]["mdp"]
    });
    Promise.resolve(this.utilisateur).then(value => {
      this.nom=value.nom;
      this.prenom=value.prenom;
      this.email=value.email;

    })


  }
}
