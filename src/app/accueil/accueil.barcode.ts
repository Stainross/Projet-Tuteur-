import { AfterViewInit, Component } from '@angular/core';
import Quagga from "quagga";
import * as $ from 'jQuery';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.barcode.css']
})
export class AppComponent{
  title = 'app-projettut';
  errorMessage: string;
    test(){
        
        console.log("test1");
  Quagga.init({
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
      $.getJSON(`https://world.openfoodfacts.org/api/v0/product/${codeB.codeResult.code}.json`, function(offAPI) {
        //Quagga.stop();
        window.alert(offAPI.product.allergens);
      })
    })
  }
});console.log("tsd");
    }
  
      }
    


