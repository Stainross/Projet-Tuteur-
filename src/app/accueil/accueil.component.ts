import { AfterViewInit, Component, OnInit } from "@angular/core";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import { Product } from "./accueil.product.model";
import * as app from '../../../functions/index.js';
import { AppComponent } from '../app.component';
import { ProfilComponent } from '../profil/profil.component';
import Quagga from "quagga";
/*@Injectable({
  providedIn:'root'
})
export class ConfigService {
  constructor(private http: HttpClient) {}
}*/

@Component({
  selector: "app-accueil",
  templateUrl: "./accueil.component.html",
  styleUrls: ["./accueil.component.css"]
})
export class AccueilComponent implements OnInit{
  url = "https://world.openfoodfacts.org/api/v0/product/";
  product = new Product();
  name:string="";
  barcode="";
  public scanned=false;
  public identifie=false;
  public alreadyadded=false;
  public allergique=false;
  novaGroup:string="";
  imageUrl:string="";
  nutriScore:string="";
  allergens:string="";
  title = "app-projettut";
  errorMessage: string;  
  constructor(private httpClient: HttpClient,private appc:AppComponent, private profil:ProfilComponent,private router: Router) {
    this.ngOnInit();
  }
  ngOnInit(): void {
    this.scan();
  }
  async addToList(){
    console.log(this.barcode);
    console.log(this.appc.idfamille);
    //http://localhost:3000/api/listes
    //https://firestore.googleapis.com/v1/projects/projet-tuteure-42fc0/databases/(default)/documents/listes
    const data2 = await this.httpClient.post('https://us-central1-projet-tuteure-42fc0.cloudfunctions.net/app/api/listes', {
        barcode:this.barcode,
        idfamille:this.appc.idfamille
      }).subscribe({
        error: error => {
            this.errorMessage = error.message;
            console.error('There was an error!', error);
        }
    });
      console.log(data2);
    console.log("produit ajouté");
  }
  async getProductData(barcode: string) {
    console.log(barcode);
    const data = await this.httpClient
      .get(this.url + barcode + ".json", {
        responseType: "json"
      })
      .toPromise();
      console.log("madata "+data);
      try{
        this.product = {
          name: data["product"]["product_name"],
          novaGroup: data["product"]["nova_group"],
          imageUrl: data["product"]["image_small_url"],
          nutriScore: data["product"]["nutriscore_grade"],
          allergens: data["product"]["allergens"].replace(/en:/gi, "")
        }
      }catch(error){
        this.product={
          name:'',
          novaGroup:'0',
          imageUrl:'',
          nutriScore:'',
          allergens:''
        }
      }
    /*return (this.product = {
      name: data["product"]["product_name"],
      novaGroup: data["product"]["nova_group"],
      imageUrl: data["product"]["image_small_url"],
      nutriScore: data["product"]["nutriscore_grade"],
      allergens: data["product"]["allergens"].replace(/en:/gi, "")
    });*/
    
    return this.product;
  }
  scan(){
    setTimeout(()=>{Quagga.init({
      inputStream: {
        constraints: {
          facingMode: 'environment' // restrict camera type
        },
        area: { // defines rectangle of the detection
          top: '40%',    // top offset
          right: '0%',  // right offset
          left: '0%',   // left offset
          bottom: '40%'  // bottom offset
        },
      },
      decoder: {
        readers: ['ean_reader'], // restrict code types
        debug: {
          drawBoundingBox: true,
          showFrequency: true,
          drawScanline: true,
          showPattern: true,
          //showCanvas: true,
          //showPatches: true,
          //showFoundPatches: true,
          /*showSkeleton: true,
          showLabels: true,
          showPatchLabels: true,
          showRemainingPatchLabels: true,
          boxFromPatches: {
            showTransformed: true,
            showTransformedBox: true,
            showBB: true
          }*/
        }
      },
      },
      (err: any) => {
        if (err) {
          this.errorMessage = `Probleme initialisation QuaggaJS : ${err}`;
          console.log(this.errorMessage);
        } else {
          console.log("oui");
          Quagga.start();
          Quagga.onDetected((codeB) => {
              this.scanned=true;
              console.log(codeB.codeResult.code);
              this.barcode=codeB.codeResult.code;
              this.setInformations(codeB.codeResult.code);
              Quagga.stop();
    
          })
        }
      });
    },1000);
  }
  anotherScan(){
    this.scanned=false;
    this.scan();
  }
  setInformations(barcode: string) {
    console.log("bien entré");
    console.log(barcode);
    this.scanned=true;
    Promise.resolve(this.getProductData(barcode)).then(value => {
      if(value.name!="")
      {
        this.name = value.name;
        this.identifie=true;
        console.log("le produit est introuvable");
      }
      else{
        this.identifie=false;
        return 0;
      } 
      switch (Number(value.novaGroup)) {
        case 1: {
          value.novaGroup = "https://i.postimg.cc/sMLHBcT9/nova1.png";
          break;
        }
        case 2: {
          value.novaGroup = "https://i.postimg.cc/XrqD7hkY/nova2.png";
          break;
        }
        case 3: {
          value.novaGroup = "https://i.postimg.cc/TpC4xGms/nova3.png";
          break;
        }
        case 4: {
          value.novaGroup = "https://i.postimg.cc/N5gzZLyT/nova4.png";
          break;
        }
        default: {
          break;
        }
      }
      switch (value.nutriScore) {
        case "a": {
          value.nutriScore = "https://i.postimg.cc/s1NvBGp9/nutriA.png";
          break;
        }
        case "b": {
          value.nutriScore = "https://i.postimg.cc/gnLr3cs9/nutriB.png";
          break;
        }
        case "c": {
          value.nutriScore = "https://i.postimg.cc/vDB4Ht6Z/nutriC.png";
          break;
        }
        case "d": {
          value.nutriScore = "https://i.postimg.cc/QKHC4jrT/nutriD.png";
          break;
        }
        case "e": {
          value.nutriScore = "https://i.postimg.cc/cg1r3Q9T/nutriE.png";
          break;
        }
        default: {
          break;
        }
      }
      this.imageUrl = value.imageUrl;
      this.nutriScore = value.nutriScore;
      this.allergens = value.allergens;
      this.novaGroup = value.novaGroup;
      this.allergique=false;
      for(let key in this.allergens.split(",")){
        console.log("all du prod"+this.allergens.split(",")[key])
        for(let key2 in this.appc.allerg){
          console.log("all user"+this.appc.allerg[key2]["nom"]);
          if(this.allergens.split(",")[key]==this.appc.allerg[key2]["nom"]){
            console.log("Attention vous êtes allergique");
            this.allergique=true;
          }
        }
      }

    });

  }
}

