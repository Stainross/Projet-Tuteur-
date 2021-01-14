import { Component, ElementRef, ViewChild } from "@angular/core";
import { HttpClient } from '@angular/common/http';
var md5 = require('md5')
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  id:string;
  idfamille:string;
  allerg: [{id:number,nom:string}];
  @ViewChild('email') email: ElementRef;
  @ViewChild('mdp') mdp: ElementRef;
  @ViewChild('nom') nom: ElementRef;
  @ViewChild('prenom') prenom: ElementRef;
  connected=false;
  inscrit=false;
  constructor(private http: HttpClient){}
  async onSubmit(){
    console.log("connexion");
    //http://localhost:3000/api/users
    //https://firestore.googleapis.com/v1/projects/projet-tuteure-42fc0/databases/(default)/documents/listes
    const data = await this.http.get('https://us-central1-projet-tuteure-42fc0.cloudfunctions.net/app/api/users', {
        responseType: "json"
      }).toPromise();
      console.log(data);
      
     for(let key in data){
        if(md5(this.mdp.nativeElement.value)==data[key]["data"]["mdp"] && this.email.nativeElement.value==data[key]["data"]["email"]){
          console.log("Vous êtes connecté");
          console.log("Id ="+data[key]["id"]+" idfamille = "+data[key]["data"]["idfamille"]);
          this.id=data[key]["id"];
          this.idfamille=data[key]["data"]["idfamille"];
          this.allerg=data[key]["data"]["allergenes"];
          this.connected=true;
        }
        else{
          console.log("Identifiant ou mot de passe incorrect")
        }
      }


    
  }
  public Inscription(){
    console.log("inscription");
    if(this.checkEmail(this.email.nativeElement.value)){
      if(this.nom.nativeElement.value=="" || this.prenom.nativeElement.value=="" || this.mdp.nativeElement.value=="")alert("Un ou plusieurs champs n'ont pas été remplis");
      else{
          console.log("adresse valide");
        const data2 = this.http.post('https://us-central1-projet-tuteure-42fc0.cloudfunctions.net/app/api/users', {
        nom: this.nom.nativeElement.value,
        prenom: this.prenom.nativeElement.value,
        email:this.email.nativeElement.value,
        mdp:md5(this.mdp.nativeElement.value),
      }).subscribe({
        error: error => {
          console.error('There was an error!', error);
        }
      });
      }
      
    }else{
      console.log("adresse non valide");
      alert("Adresse mail non valide");
    }
    
  }
  checkEmail(email: string) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
