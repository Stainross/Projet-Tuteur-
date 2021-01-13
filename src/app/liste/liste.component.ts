import { Component, Input, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Product } from "../accueil/accueil.product.model";
import {AccueilComponent} from "../accueil/accueil.component";
import { AppComponent } from '../app.component';
@Component({
    selector: "app-liste",
    templateUrl: "./liste.component.html",
    styleUrls: ["./liste.component.css"]
})
export class ListeComponent implements OnInit{
    product:Product;
    productList:Product[];
    constructor(private http: HttpClient,private test:AccueilComponent,private appc:AppComponent){}
    async ngOnInit(): Promise<void> {
      console.log("zersfszfsdef");
      this.productList=[];
      //https://firestore.googleapis.com/v1/projects/projet-tuteure-42fc0/databases/(default)/documents/listes
      //http://localhost:3000/api/listes
     const data = await this.http.get('https://us-central1-projet-tuteure-42fc0.cloudfunctions.net/app/api/listes', {
        responseType: "json"
      }).toPromise();
      console.log(this.appc.idfamille);
     for(let key in data){
       if(data[key]['data']['idfamille']==this.appc.idfamille){
        this.test.getProductData(data[key]['data']['barcode']);
        this.productList.push(await Promise.resolve(this.test.getProductData(data[key]['data']['barcode'])));
        console.log(await (await Promise.resolve(this.test.getProductData(data[key]['data']['barcode']))).imageUrl);
        console.log("oui");
      }
     }
    }

    public async Supprimer(product: Product){
      var index=this.productList.indexOf(product);
      this.productList.splice(index,1);
      console.log("index:"+index);
      const data = await this.http.get('https://us-central1-projet-tuteure-42fc0.cloudfunctions.net/app/api/listes', {
        responseType: "json"
      }).toPromise();
      for(let key in data){
        if(data[key]['data']['idfamille']==this.appc.idfamille && (await this.test.getProductData(data[key]['data']['barcode'])).name==product.name){
          const data2 = this.http.delete('https://us-central1-projet-tuteure-42fc0.cloudfunctions.net/app/api/listes/'+data[key]['id'], {
      }).subscribe({
        error: error => {
          console.error('There was an error!', error);
        }
      });
        }
      }
      
    }
}