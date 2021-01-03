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
  @ViewChild('email') email: ElementRef;
  @ViewChild('mdp') mdp: ElementRef;
  connected=false;
  constructor(private http: HttpClient){}
  async onSubmit(){
    console.log("connexion");
    //https://us-central1-projet-tuteure-42fc0.cloudfunctions.net/app/api/users
    //
    const data = await this.http.get('http://localhost:3000/api/users', {
        responseType: "json"
      }).toPromise();
      console.log(data);
      
     for(let key in data){
        if(this.mdp.nativeElement.value==data[key]["data"]["mdp"] && this.email.nativeElement.value==data[key]["data"]["email"]){
          console.log("Vous êtes connecté");
          console.log("Id ="+data[key]["id"]+" idfamille = "+data[key]["data"]["idfamille"]);
          this.id=data[key]["id"];
          this.idfamille=data[key]["data"]["idfamille"];
          this.connected=true;
        }
        else{
          console.log("Identifiant ou mot de passe incorrect")
        }
      }


    
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
