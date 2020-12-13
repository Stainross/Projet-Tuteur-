/// <reference path="../../../node_modules/quagga/type-definitions/quagga.d.ts" />
import { AfterViewInit, Component, OnInit } from "@angular/core";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Product } from "./accueil.product.model";
import { AppComponent } from './accueil.barcode';
//import Quagga from 'quagga'; // ES6
//declare var Quagga:any;
//declare module "quagga";
//var Sqlite = require("angular-sqlite");
//import Sqlite from "angular-sqlite";
//angular.module('myApp', [require('angular-sqlite')]);
//const Quagga = require('quagga').default;
@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) {}
}

@Component({
  selector: "app-accueil",
  templateUrl: "./accueil.component.html",
  styleUrls: ["./accueil.component.css"]
})
export class AccueilComponent implements OnInit{
  url = "https://world.openfoodfacts.org/api/v0/product/";
  product = new Product();
  name: "";
  novaGroup: "";
  imageUrl: "";
  nutriScore: "";
  allergens: "";
  title = "app-projettut";
  //sqlite:Sqlite;
  //sqlite:Sqlite;
  //Quagga2:Quagga;
  /*this.Sqlite.create({
    name: 'items.db',
    location: 'default'
  })*/
  errorMessage: string;
  /*ngOnInit(): void {
    Quagga.init(
        {
          "inputStream": {
            "name": 'Live',
            "type": 'LiveStream',
            "target": document.querySelector('#inputBarcode'),
            constraints: {
              facingMode: "environment" // restrict camera type
            },
            area: {
              // defines rectangle of the detection
              top: "40%", // top offset
              right: "0%", // right offset
              left: "0%", // left offset
              bottom: "40%" // bottom offset
            }

          },
          decoder: {
            readers: ["ean_reader"], // restrict code types
          },
            debug: {
              drawBoundingBox: true,
              showFrequency: true,
              drawScanline: true,
              showPattern: true,
              showCanvas: true,
              showPatches: true,
              showFoundPatches: true,
              showSkeleton: true,
              showLabels: true,
              showPatchLabels: true,
              showRemainingPatchLabels: true,
              boxFromPatches: {
                showTransformed: true,
                showTransformedBox: true,
                showBB: true
              }
            }
        },
        (err: any) => {
          if (err) {
            this.errorMessage = `Probleme initialisation QuaggaJS : ${err}`;
          } else {
            Quagga.start();
            Quagga.onDetected((codeB: { codeResult: { code: string; }; }) => {
              this.setInformations(codeB.codeResult.code);
              console.log(this.errorMessage);
            });
          }
        }
      );
  
}*/
  
  //codeB.codeResult.code
  test = this.setInformations("3421370012702");
  constructor(private httpClient: HttpClient) {
    this.ngOnInit();
  }
  ngOnInit(): void {
    console.log("test2");
    const barcode = new AppComponent();
    console.log(barcode.test());
  }
  async getProductData(barcode: string) {
    const data = await this.httpClient
      .get(this.url + barcode + ".json", {
        responseType: "json"
      })
      .toPromise();
    return (this.product = {
      name: data["product"]["product_name"],
      novaGroup: data["product"]["nova_group"],
      imageUrl: data["product"]["image_small_url"],
      nutriScore: data["product"]["nutriscore_grade"],
      allergens: data["product"]["allergens"].replace(/en:/gi, "")
    });
  }
  setInformations(barcode: string) {
    Promise.resolve(this.getProductData(barcode)).then(value => {
      this.name = value.name;
      switch (value.novaGroup) {
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
    });
  }
}

