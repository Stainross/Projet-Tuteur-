import { Component, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { BddserviceService } from "../bddservice.service";
import { map } from 'rxjs/operators';
import { Utilisateur } from './profil.utilisateur.model';
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
  constructor(private http:HttpClient) {}

  async ngOnInit() {
    const data = await this.http.get('http://localhost:8000/api/users', {
        responseType: "json"
      }).toPromise();
    console.log(data);
    (this.utilisateur = {
      id: data["data"][0]["id"],
      nom: data["data"][0]["nom"],
      prenom: data["data"][0]["prenom"],
      email: data["data"][0]["email"],
      mdp: data["data"][0]["mdp"]
    });
    Promise.resolve(this.utilisateur).then(value => {
      this.nom=value.nom;
      this.prenom=value.prenom;
      this.email=value.email;

    })


  }
}
