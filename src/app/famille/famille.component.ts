import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { AppComponent } from "../app.component";
import { Utilisateur } from '../profil/profil.utilisateur.model';

@Component({
    selector: "app-famille",
    templateUrl: "./famille.component.html",
    styleUrls: ["./famille.component.css"]
  })
export class FamilleComponent{
    utilisateur=new Utilisateur();
    userList:Utilisateur[];
    constructor(private http: HttpClient,private appc:AppComponent){}

    async ngOnInit(){
        this.userList=[];
        //
        //http://localhost:3000/api/users
     const data = await this.http.get('https://us-central1-projet-tuteure-42fc0.cloudfunctions.net/app/api/users', {
        responseType: "json"
      }).toPromise();
      for(let key in data['data']){
        if(data['data'][key]['idfamille']==this.appc.idfamille){
            this.userList.push(this.utilisateur = {
                id: data["data"][this.appc.id]["id"],
                nom: data["data"][this.appc.id]["nom"],
                prenom: data["data"][this.appc.id]["prenom"],
                email: data["data"][this.appc.id]["email"],
                mdp: data["data"][this.appc.id]["mdp"]
              });
       }
      }
    
    
    }







}