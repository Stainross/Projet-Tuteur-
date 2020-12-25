import { Component, ElementRef, ViewChild } from "@angular/core";
import { HttpClient } from '@angular/common/http';
var md5 = require('md5')
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  @ViewChild('email') email: ElementRef;
  @ViewChild('mdp') mdp: ElementRef;
  connected=false;
  constructor(private http: HttpClient){}
  async onSubmit(){
    console.log("connexion");
    const data = await this.http.get('https://projet-tuteure-42fc0.web.app:8000/api/users', {
        responseType: "json"
      }).toPromise();
      
     for(let key in data['data']){
        if(md5(this.mdp.nativeElement.value)==data["data"][key]["mdp"] && this.email.nativeElement.value==data["data"][key]["email"]){
          console.log("Vous êtes connecté");
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
