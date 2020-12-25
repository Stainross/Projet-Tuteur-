import { Component, Input, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Product } from "../accueil/accueil.product.model";
import {AccueilComponent} from "../accueil/accueil.component";
@Component({
    selector: "app-liste",
    templateUrl: "./liste.component.html",
    styleUrls: ["./liste.component.css"]
})
export class ListeComponent implements OnInit{
    product:Product;
    productList:Product[];
    constructor(private http: HttpClient,private test:AccueilComponent){}
    async ngOnInit(): Promise<void> {
      this.productList=[];
     const data = await this.http.get('http://localhost:8000/api/listes', {
        responseType: "json"
      }).toPromise();
     for(let key in data['data']){
        this.test.getProductData(data['data'][key]['barcode']);
        this.productList.push(await Promise.resolve(this.test.getProductData(data['data'][key]['barcode'])));
     }
    }
}