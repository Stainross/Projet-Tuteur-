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
      for(let key in data){
        if(data[key]['data']['idfamille']==this.appc.idfamille){
            this.userList.push(this.utilisateur = {
                id: data[key]["data"]["id"],
                nom: data[key]["data"]["nom"],
                prenom: data[key]["data"]["prenom"],
                email: data[key]["data"]["email"],
                mdp: data[key]["data"]["mdp"]
              });
       }
      }
    
    
    }







}