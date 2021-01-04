(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\leclerc\Documents\IUT\2eme année\Projet Tuteuré\Dossier_git_projet2\Projet-Tuteure\src\main.ts */"zUnb");


/***/ }),

/***/ "1+jY":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/accueil/accueil.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<script src=\"https://cdn.rawgit.com/serratus/quaggaJS/0420d5e0/dist/quagga.min.js\"></script>\r\n<script src=\"node_modules/quagga/quagga.min.js\"></script>\r\n\r\n\r\n<div  id=\"interactive\" class=\"viewport\" *ngIf=\"scanned==false\">\r\n\t<!-- QuaggaJS ici -->\t\r\n</div>\r\n<div *ngIf=\"scanned && identifie\" id=\"box\">\r\n\t<div id=\"score\">\r\n\t\t<h1>Ce produit est bon pour vous</h1>\r\n\t\t<h2>Allergènes: {{allergens}}</h2>\r\n\t\t<img class=\"label\" src={{novaGroup}} />\r\n\t\t<img class=\"label\" src={{nutriScore}} />\r\n\t</div>\r\n\t\t<img [src]=\"imageUrl\" />\r\n\t\t<br /><button type=\"button\" (click)=\"addToList()\">Ajouter à la liste</button>\r\n\t\t<h2>{{name}}</h2>\r\n\t\t<p>Description du produit</p>\r\n\t\t<section class=\"portfolio-experiment\">\r\n\t\t\t<a (click)=\"anotherScan()\">\r\n\t\t\t  <span class=\"text\">Réessayer</span>\r\n\t\t\t  <span class=\"line -right\"></span>\r\n\t\t\t  <span class=\"line -top\"></span>\r\n\t\t\t  <span class=\"line -left\"></span>\r\n\t\t\t  <span class=\"line -bottom\"></span>\r\n\t\t\t</a>\r\n\t\t  </section>\r\n\t</div>\r\n<div *ngIf=\"scanned && identifie==false\" id=\"box2\">\r\n\t\r\n<H1>Le produit scanné n'a pas été reconnu.\r\n</H1>\r\n    <section class=\"portfolio-experiment\">\r\n        <a (click)=\"anotherScan()\">\r\n          <span class=\"text\">Réessayer</span>\r\n          <span class=\"line -right\"></span>\r\n          <span class=\"line -top\"></span>\r\n          <span class=\"line -left\"></span>\r\n          <span class=\"line -bottom\"></span>\r\n        </a>\r\n      </section>\r\n\r\n</div>");

/***/ }),

/***/ "68Ew":
/*!**************************************!*\
  !*** ./src/app/profil/allergenes.ts ***!
  \**************************************/
/*! exports provided: Allergenes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Allergenes", function() { return Allergenes; });
const Allergenes = [
    {
        id: 1,
        nom: "lactose"
    },
    {
        id: 2,
        nom: "fruit a coque"
    },
    {
        id: 3,
        nom: "arachides"
    },
    {
        id: 4,
        nom: "gluten"
    }
];


/***/ }),

/***/ "6P3Q":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/liste/liste.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ul *ngFor=\"let product of productList\">\r\n    <li><img src=\"{{product.imageUrl}}\"/>Nom: {{product.name}} Allergènes: {{product.allergens}}</li>    \r\n</ul>");

/***/ }),

/***/ "85Lx":
/*!********************************************!*\
  !*** ./src/app/accueil/hello.component.ts ***!
  \********************************************/
/*! exports provided: HelloComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelloComponent", function() { return HelloComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let HelloComponent = class HelloComponent {
};
HelloComponent.propDecorators = {
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    novaGroup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    imageUrl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nutriScore: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
HelloComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "hello",
        template: `
    <h1>Nom: {{ name }}</h1>
    <p>Nova:{{ novaGroup }} Nutri:{{ nutriScore }}</p>
    <img src="{{ imageUrl }}" />
  `,
        styles: ["\n      h1 {\n        font-family: Lato;\n      }\n    "]
    })
], HelloComponent);



/***/ }),

/***/ "8IyQ":
/*!********************************************!*\
  !*** ./src/app/profil/profil.component.ts ***!
  \********************************************/
/*! exports provided: ProfilComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilComponent", function() { return ProfilComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_profil_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./profil.component.html */ "aFPW");
/* harmony import */ var _profil_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profil.component.css */ "AYXS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _profil_utilisateur_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profil.utilisateur.model */ "ehmE");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app.component */ "Sy1n");
/* harmony import */ var _allergenes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./allergenes */ "68Ew");








let ProfilComponent = class ProfilComponent {
    constructor(http, appc) {
        this.http = http;
        this.appc = appc;
        this.utilisateur = new _profil_utilisateur_model__WEBPACK_IMPORTED_MODULE_5__["Utilisateur"]();
        this.allerg = [{ id: 1, nom: "lactose" }];
        this.Allergenes = _allergenes__WEBPACK_IMPORTED_MODULE_7__["Allergenes"];
    }
    changeName() {
        var valeur = prompt("Entrez le nouveau nom d'utilisateur");
        this.nom = valeur;
    }
    changeMail() {
        var valeur = prompt("Entrez la nouvelle adresse mail");
        this.email = valeur;
    }
    changeMDP() {
        var valeur = prompt("Entrez le nouveau mot de passe");
        //this.mdp = valeur;
    }
    Ajoutallerg() {
        /*var nom = "gluten";
        var id = 2;
        this.allerg.push({ id, nom });*/
        for (let key in _allergenes__WEBPACK_IMPORTED_MODULE_7__["Allergenes"]) {
            if (_allergenes__WEBPACK_IMPORTED_MODULE_7__["Allergenes"][key]["id"] == this.selectedAlg) {
                var id = _allergenes__WEBPACK_IMPORTED_MODULE_7__["Allergenes"][key]["id"];
                var nom = _allergenes__WEBPACK_IMPORTED_MODULE_7__["Allergenes"][key]["nom"];
                this.allerg.push({ id, nom });
            }
        }
    }
    getSelectedSkill() {
        console.log(this.selectedAlg);
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log("L'id est " + this.appc.id);
            //https://us-central1-projet-tuteure-42fc0.cloudfunctions.net/app/api/users
            //
            const data = yield this.http.get('http://localhost:3000/api/users', {
                responseType: "json"
            }).toPromise();
            console.log(data);
            for (let key in data) {
                if (data[key]["id"] == this.appc.id) {
                    (this.utilisateur = {
                        id: data[key]["data"]["id"],
                        nom: data[key]["data"]["nom"],
                        prenom: data[key]["data"]["prenom"],
                        email: data[key]["data"]["email"],
                        mdp: data[key]["data"]["mdp"]
                    });
                }
            }
            Promise.resolve(this.utilisateur).then(value => {
                this.nom = value.nom;
                this.prenom = value.prenom;
                this.email = value.email;
            });
        });
    }
};
ProfilComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"] }
];
ProfilComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-profil",
        template: _raw_loader_profil_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_profil_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProfilComponent);



/***/ }),

/***/ "A3xY":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("p {\r\n  font-family: Lato;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0FBQ25CIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XHJcbiAgZm9udC1mYW1pbHk6IExhdG87XHJcbn0iXX0= */");

/***/ }),

/***/ "AYXS":
/*!*********************************************!*\
  !*** ./src/app/profil/profil.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWwuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/


/***/ }),

/***/ "EmOr":
/*!***********************************************!*\
  !*** ./src/app/accueil/accueil.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img {\r\n  height: 150px;\r\n  width: auto;\r\n}\r\n.label {\r\n  height: 50px;\r\n  margin-bottom: 0px;\r\n  margin-top: 0px;\r\n  margin-left: 20px;\r\n  margin-right: 20px;\r\n}\r\np {\r\n  width: 140px;\r\n  text-align: center;\r\n  display: inline-block;\r\n}\r\n#box {\r\n  width: 100%;\r\n  text-align: center;\r\n  color: blue;\r\n}\r\n#score {\r\n  width: 100%;\r\n}\r\nheader{\r\n\r\n  color:white;\r\n  background-image:linear-gradient(to right, #f8a5c2 0%, #c44569#c44569 100%);\r\n  border-style: solid;\r\n  border-color: #c44569;\r\n  padding: 0.5cm;\r\n  text-align: center;\r\n}\r\nbody{\r\n  background-color :#1e90ff; \r\n  text-align: center;\r\n}\r\n#camera{\r\n  position: fixed;\r\n  text-align: center;\r\n\r\n}\r\n/*Bouton*/\r\n.portfolio-experiment a {\r\ncolor: white;\r\npadding: 0.7em calc(0.7em * 1.2);\r\ndisplay: inline-block;\r\nborder: 3px solid transparent;\r\nposition: relative;\r\nfont-size: 1.5em;\r\ncursor: pointer;\r\nletter-spacing: 0.07em;\r\n}\r\n.portfolio-experiment a .text {\r\nfont-family: proxima-nova, monospace;\r\ntransform: translate3d(0, 0.7em, 0);\r\ndisplay: block;\r\ntransition: transform 0.4s cubic-bezier(0.2, 0, 0, 1) 0.4s;\r\n}\r\n.portfolio-experiment a:after {\r\nposition: absolute;\r\ncontent: \"\";\r\nbottom: -3px;\r\nleft: calc(0.7em * 1.2);\r\nright: calc(0.7em * 1.2);\r\nheight: 3px;\r\nbackground: #f8a5c2;\r\ntransition: transform 0.8s cubic-bezier(1, 0, 0.37, 1) 0.2s, right 0.2s cubic-bezier(0.04, 0.48, 0, 1) 0.6s, left 0.4s cubic-bezier(0.04, 0.48, 0, 1) 0.6s;\r\ntransform-origin: left;\r\n}\r\n.portfolio-experiment .line {\r\nposition: absolute;\r\nbackground: #f8a5c2;\r\n}\r\n.portfolio-experiment .line.-right, .portfolio-experiment .line.-left {\r\nwidth: 3px;\r\nbottom: -3px;\r\ntop: -3px;\r\ntransform: scale3d(1, 0, 1);\r\n}\r\n.portfolio-experiment .line.-top, .portfolio-experiment .line.-bottom {\r\nheight: 3px;\r\nleft: -3px;\r\nright: -3px;\r\ntransform: scale3d(0, 1, 1);\r\n}\r\n.portfolio-experiment .line.-right {\r\nright: -3px;\r\ntransition: transform 0.1s cubic-bezier(1, 0, 0.65, 1.01) 0.23s;\r\ntransform-origin: top;\r\n}\r\n.portfolio-experiment .line.-top {\r\ntop: -3px;\r\ntransition: transform 0.08s linear 0.43s;\r\ntransform-origin: left;\r\n}\r\n.portfolio-experiment .line.-left {\r\nleft: -3px;\r\ntransition: transform 0.08s linear 0.51s;\r\ntransform-origin: bottom;\r\n}\r\n.portfolio-experiment .line.-bottom {\r\nbottom: -3px;\r\ntransition: transform 0.3s cubic-bezier(1, 0, 0.65, 1.01);\r\ntransform-origin: right;\r\n}\r\n.portfolio-experiment a:hover .text,\r\n.portfolio-experiment a:active .text {\r\ntransform: translate3d(0, 0, 0);\r\ntransition: transform 0.6s cubic-bezier(0.2, 0, 0, 1) 0.4s;\r\n}\r\n.portfolio-experiment a:hover:after,\r\n.portfolio-experiment a:active:after {\r\ntransform: scale3d(0, 1, 1);\r\nright: -3px;\r\nleft: -3px;\r\ntransform-origin: right;\r\ntransition: transform 0.2s cubic-bezier(1, 0, 0.65, 1.01) 0.17s, right 0.2s cubic-bezier(1, 0, 0.65, 1.01), left 0s 0.3s;\r\n}\r\n.portfolio-experiment a:hover .line,\r\n.portfolio-experiment a:active .line {\r\ntransform: scale3d(1, 1, 1);\r\n}\r\n.portfolio-experiment a:hover .line.-right,\r\n.portfolio-experiment a:active .line.-right {\r\ntransition: transform 0.1s cubic-bezier(1, 0, 0.65, 1.01) 0.2s;\r\ntransform-origin: bottom;\r\n}\r\n.portfolio-experiment a:hover .line.-top,\r\n.portfolio-experiment a:active .line.-top {\r\ntransition: transform 0.08s linear 0.4s;\r\ntransform-origin: right;\r\n}\r\n.portfolio-experiment a:hover .line.-left,\r\n.portfolio-experiment a:active .line.-left {\r\ntransition: transform 0.08s linear 0.48s;\r\ntransform-origin: top;\r\n}\r\n.portfolio-experiment a:hover .line.-bottom,\r\n.portfolio-experiment a:active .line.-bottom {\r\ntransition: transform 0.5s cubic-bezier(0, 0.53, 0.29, 1) 0.56s;\r\ntransform-origin: left;\r\n}\r\n/*# sourceMappingURL=styleechec.css.map */\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY3VlaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixXQUFXO0FBQ2I7QUFDQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBUUE7O0VBRUUsV0FBVztFQUVYLDJFQUEyRTtFQUMzRSxtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7O0FBRXBCO0FBQ0EsU0FBUztBQUNUO0FBQ0EsWUFBWTtBQUNaLGdDQUFnQztBQUNoQyxxQkFBcUI7QUFDckIsNkJBQTZCO0FBQzdCLGtCQUFrQjtBQUNsQixnQkFBZ0I7QUFDaEIsZUFBZTtBQUNmLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDLG1DQUFtQztBQUNuQyxjQUFjO0FBQ2QsMERBQTBEO0FBQzFEO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIsV0FBVztBQUNYLFlBQVk7QUFDWix1QkFBdUI7QUFDdkIsd0JBQXdCO0FBQ3hCLFdBQVc7QUFDWCxtQkFBbUI7QUFDbkIsMEpBQTBKO0FBQzFKLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0EsVUFBVTtBQUNWLFlBQVk7QUFDWixTQUFTO0FBQ1QsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsVUFBVTtBQUNWLFdBQVc7QUFDWCwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBLFdBQVc7QUFDWCwrREFBK0Q7QUFDL0QscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxTQUFTO0FBQ1Qsd0NBQXdDO0FBQ3hDLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0EsVUFBVTtBQUNWLHdDQUF3QztBQUN4Qyx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBLFlBQVk7QUFDWix5REFBeUQ7QUFDekQsdUJBQXVCO0FBQ3ZCO0FBQ0E7O0FBRUEsK0JBQStCO0FBQy9CLDBEQUEwRDtBQUMxRDtBQUNBOztBQUVBLDJCQUEyQjtBQUMzQixXQUFXO0FBQ1gsVUFBVTtBQUNWLHVCQUF1QjtBQUN2Qix3SEFBd0g7QUFDeEg7QUFDQTs7QUFFQSwyQkFBMkI7QUFDM0I7QUFDQTs7QUFFQSw4REFBOEQ7QUFDOUQsd0JBQXdCO0FBQ3hCO0FBQ0E7O0FBRUEsdUNBQXVDO0FBQ3ZDLHVCQUF1QjtBQUN2QjtBQUNBOztBQUVBLHdDQUF3QztBQUN4QyxxQkFBcUI7QUFDckI7QUFDQTs7QUFFQSwrREFBK0Q7QUFDL0Qsc0JBQXNCO0FBQ3RCO0FBRUEseUNBQXlDIiwiZmlsZSI6ImFjY3VlaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XHJcbiAgaGVpZ2h0OiAxNTBweDtcclxuICB3aWR0aDogYXV0bztcclxufVxyXG4ubGFiZWwge1xyXG4gIGhlaWdodDogNTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgbWFyZ2luLXRvcDogMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG5wIHtcclxuICB3aWR0aDogMTQwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG4jYm94IHtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6IGJsdWU7XHJcbn1cclxuI3Njb3JlIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuaGVhZGVye1xyXG5cclxuICBjb2xvcjp3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOi13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsICNmOGE1YzIgMCUsICNjNDQ1NjkgMTAwJSk7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmOGE1YzIgMCUsICNjNDQ1NjkjYzQ0NTY5IDEwMCUpO1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLWNvbG9yOiAjYzQ0NTY5O1xyXG4gIHBhZGRpbmc6IDAuNWNtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5ib2R5e1xyXG4gIGJhY2tncm91bmQtY29sb3IgOiMxZTkwZmY7IFxyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4jY2FtZXJhe1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG59XHJcbi8qQm91dG9uKi9cclxuLnBvcnRmb2xpby1leHBlcmltZW50IGEge1xyXG5jb2xvcjogd2hpdGU7XHJcbnBhZGRpbmc6IDAuN2VtIGNhbGMoMC43ZW0gKiAxLjIpO1xyXG5kaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbmJvcmRlcjogM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG5wb3NpdGlvbjogcmVsYXRpdmU7XHJcbmZvbnQtc2l6ZTogMS41ZW07XHJcbmN1cnNvcjogcG9pbnRlcjtcclxubGV0dGVyLXNwYWNpbmc6IDAuMDdlbTtcclxufVxyXG4ucG9ydGZvbGlvLWV4cGVyaW1lbnQgYSAudGV4dCB7XHJcbmZvbnQtZmFtaWx5OiBwcm94aW1hLW5vdmEsIG1vbm9zcGFjZTtcclxudHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLjdlbSwgMCk7XHJcbmRpc3BsYXk6IGJsb2NrO1xyXG50cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC40cyBjdWJpYy1iZXppZXIoMC4yLCAwLCAwLCAxKSAwLjRzO1xyXG59XHJcbi5wb3J0Zm9saW8tZXhwZXJpbWVudCBhOmFmdGVyIHtcclxucG9zaXRpb246IGFic29sdXRlO1xyXG5jb250ZW50OiBcIlwiO1xyXG5ib3R0b206IC0zcHg7XHJcbmxlZnQ6IGNhbGMoMC43ZW0gKiAxLjIpO1xyXG5yaWdodDogY2FsYygwLjdlbSAqIDEuMik7XHJcbmhlaWdodDogM3B4O1xyXG5iYWNrZ3JvdW5kOiAjZjhhNWMyO1xyXG50cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC44cyBjdWJpYy1iZXppZXIoMSwgMCwgMC4zNywgMSkgMC4ycywgcmlnaHQgMC4ycyBjdWJpYy1iZXppZXIoMC4wNCwgMC40OCwgMCwgMSkgMC42cywgbGVmdCAwLjRzIGN1YmljLWJlemllcigwLjA0LCAwLjQ4LCAwLCAxKSAwLjZzO1xyXG50cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xyXG59XHJcbi5wb3J0Zm9saW8tZXhwZXJpbWVudCAubGluZSB7XHJcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuYmFja2dyb3VuZDogI2Y4YTVjMjtcclxufVxyXG4ucG9ydGZvbGlvLWV4cGVyaW1lbnQgLmxpbmUuLXJpZ2h0LCAucG9ydGZvbGlvLWV4cGVyaW1lbnQgLmxpbmUuLWxlZnQge1xyXG53aWR0aDogM3B4O1xyXG5ib3R0b206IC0zcHg7XHJcbnRvcDogLTNweDtcclxudHJhbnNmb3JtOiBzY2FsZTNkKDEsIDAsIDEpO1xyXG59XHJcbi5wb3J0Zm9saW8tZXhwZXJpbWVudCAubGluZS4tdG9wLCAucG9ydGZvbGlvLWV4cGVyaW1lbnQgLmxpbmUuLWJvdHRvbSB7XHJcbmhlaWdodDogM3B4O1xyXG5sZWZ0OiAtM3B4O1xyXG5yaWdodDogLTNweDtcclxudHJhbnNmb3JtOiBzY2FsZTNkKDAsIDEsIDEpO1xyXG59XHJcbi5wb3J0Zm9saW8tZXhwZXJpbWVudCAubGluZS4tcmlnaHQge1xyXG5yaWdodDogLTNweDtcclxudHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMXMgY3ViaWMtYmV6aWVyKDEsIDAsIDAuNjUsIDEuMDEpIDAuMjNzO1xyXG50cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XHJcbn1cclxuLnBvcnRmb2xpby1leHBlcmltZW50IC5saW5lLi10b3Age1xyXG50b3A6IC0zcHg7XHJcbnRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjA4cyBsaW5lYXIgMC40M3M7XHJcbnRyYW5zZm9ybS1vcmlnaW46IGxlZnQ7XHJcbn1cclxuLnBvcnRmb2xpby1leHBlcmltZW50IC5saW5lLi1sZWZ0IHtcclxubGVmdDogLTNweDtcclxudHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMDhzIGxpbmVhciAwLjUxcztcclxudHJhbnNmb3JtLW9yaWdpbjogYm90dG9tO1xyXG59XHJcbi5wb3J0Zm9saW8tZXhwZXJpbWVudCAubGluZS4tYm90dG9tIHtcclxuYm90dG9tOiAtM3B4O1xyXG50cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBjdWJpYy1iZXppZXIoMSwgMCwgMC42NSwgMS4wMSk7XHJcbnRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0O1xyXG59XHJcbi5wb3J0Zm9saW8tZXhwZXJpbWVudCBhOmhvdmVyIC50ZXh0LFxyXG4ucG9ydGZvbGlvLWV4cGVyaW1lbnQgYTphY3RpdmUgLnRleHQge1xyXG50cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG50cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC42cyBjdWJpYy1iZXppZXIoMC4yLCAwLCAwLCAxKSAwLjRzO1xyXG59XHJcbi5wb3J0Zm9saW8tZXhwZXJpbWVudCBhOmhvdmVyOmFmdGVyLFxyXG4ucG9ydGZvbGlvLWV4cGVyaW1lbnQgYTphY3RpdmU6YWZ0ZXIge1xyXG50cmFuc2Zvcm06IHNjYWxlM2QoMCwgMSwgMSk7XHJcbnJpZ2h0OiAtM3B4O1xyXG5sZWZ0OiAtM3B4O1xyXG50cmFuc2Zvcm0tb3JpZ2luOiByaWdodDtcclxudHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgY3ViaWMtYmV6aWVyKDEsIDAsIDAuNjUsIDEuMDEpIDAuMTdzLCByaWdodCAwLjJzIGN1YmljLWJlemllcigxLCAwLCAwLjY1LCAxLjAxKSwgbGVmdCAwcyAwLjNzO1xyXG59XHJcbi5wb3J0Zm9saW8tZXhwZXJpbWVudCBhOmhvdmVyIC5saW5lLFxyXG4ucG9ydGZvbGlvLWV4cGVyaW1lbnQgYTphY3RpdmUgLmxpbmUge1xyXG50cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XHJcbn1cclxuLnBvcnRmb2xpby1leHBlcmltZW50IGE6aG92ZXIgLmxpbmUuLXJpZ2h0LFxyXG4ucG9ydGZvbGlvLWV4cGVyaW1lbnQgYTphY3RpdmUgLmxpbmUuLXJpZ2h0IHtcclxudHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMXMgY3ViaWMtYmV6aWVyKDEsIDAsIDAuNjUsIDEuMDEpIDAuMnM7XHJcbnRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbTtcclxufVxyXG4ucG9ydGZvbGlvLWV4cGVyaW1lbnQgYTpob3ZlciAubGluZS4tdG9wLFxyXG4ucG9ydGZvbGlvLWV4cGVyaW1lbnQgYTphY3RpdmUgLmxpbmUuLXRvcCB7XHJcbnRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjA4cyBsaW5lYXIgMC40cztcclxudHJhbnNmb3JtLW9yaWdpbjogcmlnaHQ7XHJcbn1cclxuLnBvcnRmb2xpby1leHBlcmltZW50IGE6aG92ZXIgLmxpbmUuLWxlZnQsXHJcbi5wb3J0Zm9saW8tZXhwZXJpbWVudCBhOmFjdGl2ZSAubGluZS4tbGVmdCB7XHJcbnRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjA4cyBsaW5lYXIgMC40OHM7XHJcbnRyYW5zZm9ybS1vcmlnaW46IHRvcDtcclxufVxyXG4ucG9ydGZvbGlvLWV4cGVyaW1lbnQgYTpob3ZlciAubGluZS4tYm90dG9tLFxyXG4ucG9ydGZvbGlvLWV4cGVyaW1lbnQgYTphY3RpdmUgLmxpbmUuLWJvdHRvbSB7XHJcbnRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGN1YmljLWJlemllcigwLCAwLjUzLCAwLjI5LCAxKSAwLjU2cztcclxudHJhbnNmb3JtLW9yaWdpbjogbGVmdDtcclxufVxyXG5cclxuLyojIHNvdXJjZU1hcHBpbmdVUkw9c3R5bGVlY2hlYy5jc3MubWFwICovXHJcbiJdfQ== */");

/***/ }),

/***/ "I2e7":
/*!**********************************************!*\
  !*** ./src/app/accueil/accueil.component.ts ***!
  \**********************************************/
/*! exports provided: AccueilComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccueilComponent", function() { return AccueilComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_accueil_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./accueil.component.html */ "1+jY");
/* harmony import */ var _accueil_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accueil.component.css */ "EmOr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _accueil_product_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./accueil.product.model */ "wJr2");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../app.component */ "Sy1n");
/* harmony import */ var quagga__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! quagga */ "igAG");
/* harmony import */ var quagga__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(quagga__WEBPACK_IMPORTED_MODULE_8__);









/*@Injectable({
  providedIn:'root'
})
export class ConfigService {
  constructor(private http: HttpClient) {}
}*/
let AccueilComponent = class AccueilComponent {
    constructor(httpClient, appc, router) {
        this.httpClient = httpClient;
        this.appc = appc;
        this.router = router;
        this.url = "https://world.openfoodfacts.org/api/v0/product/";
        this.product = new _accueil_product_model__WEBPACK_IMPORTED_MODULE_6__["Product"]();
        this.name = "";
        this.barcode = "";
        this.scanned = false;
        this.identifie = false;
        this.novaGroup = "";
        this.imageUrl = "";
        this.nutriScore = "";
        this.allergens = "";
        this.title = "app-projettut";
        this.ngOnInit();
    }
    ngOnInit() {
        this.scan();
    }
    addToList() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(this.barcode);
            console.log(this.appc.idfamille);
            //
            //https://us-central1-projet-tuteure-42fc0.cloudfunctions.net/app/api/listes
            const data2 = yield this.httpClient.post('http://localhost:3000/api/listes', {
                barcode: this.barcode,
                idfamille: this.appc.idfamille
            }).subscribe({
                error: error => {
                    this.errorMessage = error.message;
                    console.error('There was an error!', error);
                }
            });
            console.log(data2);
            console.log("produit ajouté");
        });
    }
    getProductData(barcode) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(barcode);
            const data = yield this.httpClient
                .get(this.url + barcode + ".json", {
                responseType: "json"
            })
                .toPromise();
            console.log("madata " + data);
            try {
                this.product = {
                    name: data["product"]["product_name"],
                    novaGroup: data["product"]["nova_group"],
                    imageUrl: data["product"]["image_small_url"],
                    nutriScore: data["product"]["nutriscore_grade"],
                    allergens: data["product"]["allergens"].replace(/en:/gi, "")
                };
            }
            catch (error) {
                this.product = {
                    name: '',
                    novaGroup: '0',
                    imageUrl: '',
                    nutriScore: '',
                    allergens: ''
                };
            }
            /*return (this.product = {
              name: data["product"]["product_name"],
              novaGroup: data["product"]["nova_group"],
              imageUrl: data["product"]["image_small_url"],
              nutriScore: data["product"]["nutriscore_grade"],
              allergens: data["product"]["allergens"].replace(/en:/gi, "")
            });*/
            return this.product;
        });
    }
    scan() {
        setTimeout(() => {
            quagga__WEBPACK_IMPORTED_MODULE_8___default.a.init({
                inputStream: {
                    constraints: {
                        facingMode: 'environment' // restrict camera type
                    },
                    area: {
                        top: '40%',
                        right: '0%',
                        left: '0%',
                        bottom: '40%' // bottom offset
                    },
                },
                decoder: {
                    readers: ['ean_reader'],
                    debug: {
                        drawBoundingBox: true,
                        showFrequency: true,
                        drawScanline: true,
                        showPattern: true,
                    }
                },
            }, (err) => {
                if (err) {
                    this.errorMessage = `Probleme initialisation QuaggaJS : ${err}`;
                    console.log(this.errorMessage);
                }
                else {
                    console.log("oui");
                    quagga__WEBPACK_IMPORTED_MODULE_8___default.a.start();
                    quagga__WEBPACK_IMPORTED_MODULE_8___default.a.onDetected((codeB) => {
                        this.scanned = true;
                        console.log(codeB.codeResult.code);
                        this.barcode = codeB.codeResult.code;
                        this.setInformations(codeB.codeResult.code);
                        quagga__WEBPACK_IMPORTED_MODULE_8___default.a.stop();
                    });
                }
            });
        }, 1000);
    }
    anotherScan() {
        this.scanned = false;
        this.scan();
    }
    setInformations(barcode) {
        console.log("bien entré");
        console.log(barcode);
        this.scanned = true;
        Promise.resolve(this.getProductData(barcode)).then(value => {
            if (value.name != "") {
                this.name = value.name;
                this.identifie = true;
                console.log("le produit est introuvable");
            }
            else {
                this.identifie = false;
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
        });
    }
};
AccueilComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
AccueilComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-accueil",
        template: _raw_loader_accueil_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_accueil_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AccueilComponent);



/***/ }),

/***/ "K+Mw":
/*!******************************************!*\
  !*** ./src/app/liste/liste.component.ts ***!
  \******************************************/
/*! exports provided: ListeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListeComponent", function() { return ListeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_liste_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./liste.component.html */ "6P3Q");
/* harmony import */ var _liste_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./liste.component.css */ "tO9y");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _accueil_accueil_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../accueil/accueil.component */ "I2e7");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app.component */ "Sy1n");







let ListeComponent = class ListeComponent {
    constructor(http, test, appc) {
        this.http = http;
        this.test = test;
        this.appc = appc;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log("zersfszfsdef");
            this.productList = [];
            //https://us-central1-projet-tuteure-42fc0.cloudfunctions.net/app/api/listes
            //
            const data = yield this.http.get('http://localhost:3000/api/listes', {
                responseType: "json"
            }).toPromise();
            console.log(this.appc.idfamille);
            for (let key in data) {
                if (data[key]['data']['idfamille'] == this.appc.idfamille) {
                    this.test.getProductData(data[key]['data']['barcode']);
                    this.productList.push(yield Promise.resolve(this.test.getProductData(data[key]['data']['barcode'])));
                    console.log(yield (yield Promise.resolve(this.test.getProductData(data[key]['data']['barcode']))).imageUrl);
                    console.log("oui");
                }
            }
        });
    }
};
ListeComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _accueil_accueil_component__WEBPACK_IMPORTED_MODULE_5__["AccueilComponent"] },
    { type: _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"] }
];
ListeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-liste",
        template: _raw_loader_liste_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_liste_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ListeComponent);



/***/ }),

/***/ "Kyzr":
/*!***********************************************!*\
  !*** ./src/app/top-bar/top-bar.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("header{\r\n\r\n    color:white;\r\n    background-image:linear-gradient(to right, #f8a5c2 0%, #c44569#c44569 100%);\r\n    border-style: solid;\r\n    border-color: #c44569;\r\n    padding: 0.5cm;\r\n    text-align: center;\r\n}\r\nbody{\r\n    background-color :#1e90ff; \r\n    text-align: center;\r\n}\r\n#camera{\r\n    position: fixed;\r\n    text-align: center;\r\n\r\n}\r\n/*Bouton*/\r\n.portfolio-experiment a {\r\n  color: white;\r\n  padding: 0.7em calc(0.7em * 1.2);\r\n  display: inline-block;\r\n  border: 3px solid transparent;\r\n  position: relative;\r\n  font-size: 1.5em;\r\n  cursor: pointer;\r\n  letter-spacing: 0.07em;\r\n}\r\n.portfolio-experiment a .text {\r\n  font-family: proxima-nova, monospace;\r\n  transform: translate3d(0, 0.7em, 0);\r\n  display: block;\r\n  transition: transform 0.4s cubic-bezier(0.2, 0, 0, 1) 0.4s;\r\n}\r\n.portfolio-experiment a:after {\r\n  position: absolute;\r\n  content: \"\";\r\n  bottom: -3px;\r\n  left: calc(0.7em * 1.2);\r\n  right: calc(0.7em * 1.2);\r\n  height: 3px;\r\n  background: #f8a5c2;\r\n  transition: transform 0.8s cubic-bezier(1, 0, 0.37, 1) 0.2s, right 0.2s cubic-bezier(0.04, 0.48, 0, 1) 0.6s, left 0.4s cubic-bezier(0.04, 0.48, 0, 1) 0.6s;\r\n  transform-origin: left;\r\n}\r\n.portfolio-experiment .line {\r\n  position: absolute;\r\n  background: #f8a5c2;\r\n}\r\n.portfolio-experiment .line.-right, .portfolio-experiment .line.-left {\r\n  width: 3px;\r\n  bottom: -3px;\r\n  top: -3px;\r\n  transform: scale3d(1, 0, 1);\r\n}\r\n.portfolio-experiment .line.-top, .portfolio-experiment .line.-bottom {\r\n  height: 3px;\r\n  left: -3px;\r\n  right: -3px;\r\n  transform: scale3d(0, 1, 1);\r\n}\r\n.portfolio-experiment .line.-right {\r\n  right: -3px;\r\n  transition: transform 0.1s cubic-bezier(1, 0, 0.65, 1.01) 0.23s;\r\n  transform-origin: top;\r\n}\r\n.portfolio-experiment .line.-top {\r\n  top: -3px;\r\n  transition: transform 0.08s linear 0.43s;\r\n  transform-origin: left;\r\n}\r\n.portfolio-experiment .line.-left {\r\n  left: -3px;\r\n  transition: transform 0.08s linear 0.51s;\r\n  transform-origin: bottom;\r\n}\r\n.portfolio-experiment .line.-bottom {\r\n  bottom: -3px;\r\n  transition: transform 0.3s cubic-bezier(1, 0, 0.65, 1.01);\r\n  transform-origin: right;\r\n}\r\n.portfolio-experiment a:hover .text,\r\n.portfolio-experiment a:active .text {\r\n  transform: translate3d(0, 0, 0);\r\n  transition: transform 0.6s cubic-bezier(0.2, 0, 0, 1) 0.4s;\r\n}\r\n.portfolio-experiment a:hover:after,\r\n.portfolio-experiment a:active:after {\r\n  transform: scale3d(0, 1, 1);\r\n  right: -3px;\r\n  left: -3px;\r\n  transform-origin: right;\r\n  transition: transform 0.2s cubic-bezier(1, 0, 0.65, 1.01) 0.17s, right 0.2s cubic-bezier(1, 0, 0.65, 1.01), left 0s 0.3s;\r\n}\r\n.portfolio-experiment a:hover .line,\r\n.portfolio-experiment a:active .line {\r\n  transform: scale3d(1, 1, 1);\r\n}\r\n.portfolio-experiment a:hover .line.-right,\r\n.portfolio-experiment a:active .line.-right {\r\n  transition: transform 0.1s cubic-bezier(1, 0, 0.65, 1.01) 0.2s;\r\n  transform-origin: bottom;\r\n}\r\n.portfolio-experiment a:hover .line.-top,\r\n.portfolio-experiment a:active .line.-top {\r\n  transition: transform 0.08s linear 0.4s;\r\n  transform-origin: right;\r\n}\r\n.portfolio-experiment a:hover .line.-left,\r\n.portfolio-experiment a:active .line.-left {\r\n  transition: transform 0.08s linear 0.48s;\r\n  transform-origin: top;\r\n}\r\n.portfolio-experiment a:hover .line.-bottom,\r\n.portfolio-experiment a:active .line.-bottom {\r\n  transition: transform 0.5s cubic-bezier(0, 0.53, 0.29, 1) 0.56s;\r\n  transform-origin: left;\r\n}\r\n/*# sourceMappingURL=styleechec.css.map */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvcC1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxXQUFXO0lBRVgsMkVBQTJFO0lBQzNFLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsY0FBYztJQUNkLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjs7QUFFdEI7QUFDQSxTQUFTO0FBQ1Q7RUFDRSxZQUFZO0VBQ1osZ0NBQWdDO0VBQ2hDLHFCQUFxQjtFQUNyQiw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxvQ0FBb0M7RUFDcEMsbUNBQW1DO0VBQ25DLGNBQWM7RUFDZCwwREFBMEQ7QUFDNUQ7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLHVCQUF1QjtFQUN2Qix3QkFBd0I7RUFDeEIsV0FBVztFQUNYLG1CQUFtQjtFQUNuQiwwSkFBMEo7RUFDMUosc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLFNBQVM7RUFDVCwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0VBQ1YsV0FBVztFQUNYLDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0UsV0FBVztFQUNYLCtEQUErRDtFQUMvRCxxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLFNBQVM7RUFDVCx3Q0FBd0M7RUFDeEMsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxVQUFVO0VBQ1Ysd0NBQXdDO0VBQ3hDLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLHlEQUF5RDtFQUN6RCx1QkFBdUI7QUFDekI7QUFDQTs7RUFFRSwrQkFBK0I7RUFDL0IsMERBQTBEO0FBQzVEO0FBQ0E7O0VBRUUsMkJBQTJCO0VBQzNCLFdBQVc7RUFDWCxVQUFVO0VBQ1YsdUJBQXVCO0VBQ3ZCLHdIQUF3SDtBQUMxSDtBQUNBOztFQUVFLDJCQUEyQjtBQUM3QjtBQUNBOztFQUVFLDhEQUE4RDtFQUM5RCx3QkFBd0I7QUFDMUI7QUFDQTs7RUFFRSx1Q0FBdUM7RUFDdkMsdUJBQXVCO0FBQ3pCO0FBQ0E7O0VBRUUsd0NBQXdDO0VBQ3hDLHFCQUFxQjtBQUN2QjtBQUNBOztFQUVFLCtEQUErRDtFQUMvRCxzQkFBc0I7QUFDeEI7QUFFQSx5Q0FBeUMiLCJmaWxlIjoidG9wLWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaGVhZGVye1xyXG5cclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTotd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjZjhhNWMyIDAlLCAjYzQ0NTY5IDEwMCUpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmOGE1YzIgMCUsICNjNDQ1NjkjYzQ0NTY5IDEwMCUpO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogI2M0NDU2OTtcclxuICAgIHBhZGRpbmc6IDAuNWNtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbmJvZHl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yIDojMWU5MGZmOyBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4jY2FtZXJhe1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxufVxyXG4vKkJvdXRvbiovXHJcbi5wb3J0Zm9saW8tZXhwZXJpbWVudCBhIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMC43ZW0gY2FsYygwLjdlbSAqIDEuMik7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJvcmRlcjogM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmb250LXNpemU6IDEuNWVtO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBsZXR0ZXItc3BhY2luZzogMC4wN2VtO1xyXG59XHJcbi5wb3J0Zm9saW8tZXhwZXJpbWVudCBhIC50ZXh0IHtcclxuICBmb250LWZhbWlseTogcHJveGltYS1ub3ZhLCBtb25vc3BhY2U7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLjdlbSwgMCk7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNHMgY3ViaWMtYmV6aWVyKDAuMiwgMCwgMCwgMSkgMC40cztcclxufVxyXG4ucG9ydGZvbGlvLWV4cGVyaW1lbnQgYTphZnRlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgYm90dG9tOiAtM3B4O1xyXG4gIGxlZnQ6IGNhbGMoMC43ZW0gKiAxLjIpO1xyXG4gIHJpZ2h0OiBjYWxjKDAuN2VtICogMS4yKTtcclxuICBoZWlnaHQ6IDNweDtcclxuICBiYWNrZ3JvdW5kOiAjZjhhNWMyO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjhzIGN1YmljLWJlemllcigxLCAwLCAwLjM3LCAxKSAwLjJzLCByaWdodCAwLjJzIGN1YmljLWJlemllcigwLjA0LCAwLjQ4LCAwLCAxKSAwLjZzLCBsZWZ0IDAuNHMgY3ViaWMtYmV6aWVyKDAuMDQsIDAuNDgsIDAsIDEpIDAuNnM7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdDtcclxufVxyXG4ucG9ydGZvbGlvLWV4cGVyaW1lbnQgLmxpbmUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBiYWNrZ3JvdW5kOiAjZjhhNWMyO1xyXG59XHJcbi5wb3J0Zm9saW8tZXhwZXJpbWVudCAubGluZS4tcmlnaHQsIC5wb3J0Zm9saW8tZXhwZXJpbWVudCAubGluZS4tbGVmdCB7XHJcbiAgd2lkdGg6IDNweDtcclxuICBib3R0b206IC0zcHg7XHJcbiAgdG9wOiAtM3B4O1xyXG4gIHRyYW5zZm9ybTogc2NhbGUzZCgxLCAwLCAxKTtcclxufVxyXG4ucG9ydGZvbGlvLWV4cGVyaW1lbnQgLmxpbmUuLXRvcCwgLnBvcnRmb2xpby1leHBlcmltZW50IC5saW5lLi1ib3R0b20ge1xyXG4gIGhlaWdodDogM3B4O1xyXG4gIGxlZnQ6IC0zcHg7XHJcbiAgcmlnaHQ6IC0zcHg7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZTNkKDAsIDEsIDEpO1xyXG59XHJcbi5wb3J0Zm9saW8tZXhwZXJpbWVudCAubGluZS4tcmlnaHQge1xyXG4gIHJpZ2h0OiAtM3B4O1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjFzIGN1YmljLWJlemllcigxLCAwLCAwLjY1LCAxLjAxKSAwLjIzcztcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XHJcbn1cclxuLnBvcnRmb2xpby1leHBlcmltZW50IC5saW5lLi10b3Age1xyXG4gIHRvcDogLTNweDtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4wOHMgbGluZWFyIDAuNDNzO1xyXG4gIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQ7XHJcbn1cclxuLnBvcnRmb2xpby1leHBlcmltZW50IC5saW5lLi1sZWZ0IHtcclxuICBsZWZ0OiAtM3B4O1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjA4cyBsaW5lYXIgMC41MXM7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tO1xyXG59XHJcbi5wb3J0Zm9saW8tZXhwZXJpbWVudCAubGluZS4tYm90dG9tIHtcclxuICBib3R0b206IC0zcHg7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgY3ViaWMtYmV6aWVyKDEsIDAsIDAuNjUsIDEuMDEpO1xyXG4gIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0O1xyXG59XHJcbi5wb3J0Zm9saW8tZXhwZXJpbWVudCBhOmhvdmVyIC50ZXh0LFxyXG4ucG9ydGZvbGlvLWV4cGVyaW1lbnQgYTphY3RpdmUgLnRleHQge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNnMgY3ViaWMtYmV6aWVyKDAuMiwgMCwgMCwgMSkgMC40cztcclxufVxyXG4ucG9ydGZvbGlvLWV4cGVyaW1lbnQgYTpob3ZlcjphZnRlcixcclxuLnBvcnRmb2xpby1leHBlcmltZW50IGE6YWN0aXZlOmFmdGVyIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlM2QoMCwgMSwgMSk7XHJcbiAgcmlnaHQ6IC0zcHg7XHJcbiAgbGVmdDogLTNweDtcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodDtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBjdWJpYy1iZXppZXIoMSwgMCwgMC42NSwgMS4wMSkgMC4xN3MsIHJpZ2h0IDAuMnMgY3ViaWMtYmV6aWVyKDEsIDAsIDAuNjUsIDEuMDEpLCBsZWZ0IDBzIDAuM3M7XHJcbn1cclxuLnBvcnRmb2xpby1leHBlcmltZW50IGE6aG92ZXIgLmxpbmUsXHJcbi5wb3J0Zm9saW8tZXhwZXJpbWVudCBhOmFjdGl2ZSAubGluZSB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xyXG59XHJcbi5wb3J0Zm9saW8tZXhwZXJpbWVudCBhOmhvdmVyIC5saW5lLi1yaWdodCxcclxuLnBvcnRmb2xpby1leHBlcmltZW50IGE6YWN0aXZlIC5saW5lLi1yaWdodCB7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMXMgY3ViaWMtYmV6aWVyKDEsIDAsIDAuNjUsIDEuMDEpIDAuMnM7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tO1xyXG59XHJcbi5wb3J0Zm9saW8tZXhwZXJpbWVudCBhOmhvdmVyIC5saW5lLi10b3AsXHJcbi5wb3J0Zm9saW8tZXhwZXJpbWVudCBhOmFjdGl2ZSAubGluZS4tdG9wIHtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4wOHMgbGluZWFyIDAuNHM7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQ7XHJcbn1cclxuLnBvcnRmb2xpby1leHBlcmltZW50IGE6aG92ZXIgLmxpbmUuLWxlZnQsXHJcbi5wb3J0Zm9saW8tZXhwZXJpbWVudCBhOmFjdGl2ZSAubGluZS4tbGVmdCB7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMDhzIGxpbmVhciAwLjQ4cztcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XHJcbn1cclxuLnBvcnRmb2xpby1leHBlcmltZW50IGE6aG92ZXIgLmxpbmUuLWJvdHRvbSxcclxuLnBvcnRmb2xpby1leHBlcmltZW50IGE6YWN0aXZlIC5saW5lLi1ib3R0b20ge1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGN1YmljLWJlemllcigwLCAwLjUzLCAwLjI5LCAxKSAwLjU2cztcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xyXG59XHJcblxyXG4vKiMgc291cmNlTWFwcGluZ1VSTD1zdHlsZWVjaGVjLmNzcy5tYXAgKi8iXX0= */");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.css */ "A3xY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





var md5 = __webpack_require__(/*! md5 */ "aCH8");
let AppComponent = class AppComponent {
    constructor(http) {
        this.http = http;
        this.connected = false;
    }
    onSubmit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log("connexion");
            //https://us-central1-projet-tuteure-42fc0.cloudfunctions.net/app/api/users
            //
            const data = yield this.http.get('http://localhost:3000/api/users', {
                responseType: "json"
            }).toPromise();
            console.log(data);
            for (let key in data) {
                if (this.mdp.nativeElement.value == data[key]["data"]["mdp"] && this.email.nativeElement.value == data[key]["data"]["email"]) {
                    console.log("Vous êtes connecté");
                    console.log("Id =" + data[key]["id"] + " idfamille = " + data[key]["data"]["idfamille"]);
                    this.id = data[key]["id"];
                    this.idfamille = data[key]["data"]["idfamille"];
                    this.connected = true;
                }
                else {
                    console.log("Identifiant ou mot de passe incorrect");
                }
            }
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
];
AppComponent.propDecorators = {
    email: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['email',] }],
    mdp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['mdp',] }]
};
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "my-app",
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/


/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"connexion\" *ngIf=\"connected==false\">\r\n\t<p>admin@example.com</p><p>admin123456</p>\r\n\t<label>Mail</label>\r\n\t<input type=\"text\" #email/>\r\n\t<label>Mot de passe</label>\r\n\t<input type=\"text\" #mdp/>\r\n\t<button (click)=\"onSubmit()\">Se connecter</button>\r\n</div>\r\n<app-top-bar *ngIf=\"connected\"></app-top-bar>\r\n<div class=\"container\" *ngIf=\"connected\">\r\n\t<router-outlet></router-outlet>\r\n</div>\r\n\r\n<!-- \r\nCopyright Google LLC. All Rights Reserved.\r\nUse of this source code is governed by an MIT-style license that\r\ncan be found in the LICENSE file at https://angular.io/license\r\n-->\r\n  ");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./top-bar/top-bar.component */ "oDk3");
/* harmony import */ var _accueil_accueil_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./accueil/accueil.component */ "I2e7");
/* harmony import */ var _profil_profil_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./profil/profil.component */ "8IyQ");
/* harmony import */ var _accueil_hello_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./accueil/hello.component */ "85Lx");
/* harmony import */ var _liste_liste_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./liste/liste.component */ "K+Mw");
/* harmony import */ var _famille_famille_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./famille/famille.component */ "ZkRK");













//import Quagga from "quagga/type-definitions/quagga";
let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([
                { path: "", component: _accueil_accueil_component__WEBPACK_IMPORTED_MODULE_8__["AccueilComponent"] },
                { path: "profil", component: _profil_profil_component__WEBPACK_IMPORTED_MODULE_9__["ProfilComponent"] },
                { path: "liste", component: _liste_liste_component__WEBPACK_IMPORTED_MODULE_11__["ListeComponent"] },
                { path: "famille", component: _famille_famille_component__WEBPACK_IMPORTED_MODULE_12__["FamilleComponent"] }
            ])
        ],
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_7__["TopBarComponent"],
            //ProductListComponent,
            //ProductAlertsComponent,
            _liste_liste_component__WEBPACK_IMPORTED_MODULE_11__["ListeComponent"],
            _accueil_accueil_component__WEBPACK_IMPORTED_MODULE_8__["AccueilComponent"],
            _profil_profil_component__WEBPACK_IMPORTED_MODULE_9__["ProfilComponent"],
            _famille_famille_component__WEBPACK_IMPORTED_MODULE_12__["FamilleComponent"],
            _accueil_hello_component__WEBPACK_IMPORTED_MODULE_10__["HelloComponent"]
        ],
        providers: [
            _accueil_accueil_component__WEBPACK_IMPORTED_MODULE_8__["AccueilComponent"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/


/***/ }),

/***/ "ZkRK":
/*!**********************************************!*\
  !*** ./src/app/famille/famille.component.ts ***!
  \**********************************************/
/*! exports provided: FamilleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FamilleComponent", function() { return FamilleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_famille_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./famille.component.html */ "y8Ub");
/* harmony import */ var _famille_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./famille.component.css */ "cfB5");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app.component */ "Sy1n");
/* harmony import */ var _profil_profil_utilisateur_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../profil/profil.utilisateur.model */ "ehmE");







let FamilleComponent = class FamilleComponent {
    constructor(http, appc) {
        this.http = http;
        this.appc = appc;
        this.utilisateur = new _profil_profil_utilisateur_model__WEBPACK_IMPORTED_MODULE_6__["Utilisateur"]();
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.userList = [];
            //https://us-central1-projet-tuteure-42fc0.cloudfunctions.net/app/api/users
            //
            const data = yield this.http.get('http://localhost:3000/api/users', {
                responseType: "json"
            }).toPromise();
            for (let key in data) {
                if (data[key]['data']['idfamille'] == this.appc.idfamille) {
                    this.userList.push(this.utilisateur = {
                        id: data[key]["data"]["id"],
                        nom: data[key]["data"]["nom"],
                        prenom: data[key]["data"]["prenom"],
                        email: data[key]["data"]["email"],
                        mdp: data[key]["data"]["mdp"]
                    });
                }
            }
        });
    }
};
FamilleComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"] }
];
FamilleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: "app-famille",
        template: _raw_loader_famille_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_famille_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FamilleComponent);



/***/ }),

/***/ "aFPW":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profil/profil.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<script src=\"../server.js\"></script>\r\n<h2>Nom:{{nom}}</h2>\r\n<button (click)=changeName()>Nom</button><br/>\r\n<h2>Prénom:{{prenom}}</h2>\r\n<button>Prénom</button><br/>\r\n<h2>Adresse mail:{{email}}</h2>\r\n<button (click)=changeMail()>Mail</button><br/>\r\n<button (click)=changeMDP()>Mot de Passe</button><br/>\r\n\r\n\r\n<label>Allergene</label>\r\n<div *ngFor=\"let allerg of allerg\"> {{allerg.nom}} </div>\r\n<select id=\"allergenes\" [(ngModel)]=\"selectedAlg\"\r\n(change)=\"getSelectedSkill()\">\r\n    <option *ngFor=\"let alg of Allergenes\" [ngValue]=\"alg.id\">\r\n      {{alg.nom}}\r\n    </option>\r\n</select>\r\n\r\n<button (click)=Ajoutallerg()>Ajouter</button>\r\n<style>\r\n\tbutton {\r\n\t\tmargin-top: 10px;\r\n\t}\r\n</style>");

/***/ }),

/***/ "cfB5":
/*!***********************************************!*\
  !*** ./src/app/famille/famille.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmYW1pbGxlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "crnd":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "crnd";

/***/ }),

/***/ "ehmE":
/*!****************************************************!*\
  !*** ./src/app/profil/profil.utilisateur.model.ts ***!
  \****************************************************/
/*! exports provided: Utilisateur */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Utilisateur", function() { return Utilisateur; });
class Utilisateur {
}


/***/ }),

/***/ "oDk3":
/*!**********************************************!*\
  !*** ./src/app/top-bar/top-bar.component.ts ***!
  \**********************************************/
/*! exports provided: TopBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopBarComponent", function() { return TopBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_top_bar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./top-bar.component.html */ "ogDu");
/* harmony import */ var _top_bar_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./top-bar.component.css */ "Kyzr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let TopBarComponent = class TopBarComponent {
    constructor() { }
    ngOnInit() { }
};
TopBarComponent.ctorParameters = () => [];
TopBarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-top-bar",
        template: _raw_loader_top_bar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_top_bar_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TopBarComponent);

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/


/***/ }),

/***/ "ogDu":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/top-bar/top-bar.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<header>\r\n\t<a [routerLink]=\"['/']\"><img src=\"https://i.postimg.cc/fJzC2XGn/accueil.png\" alt=\"iconelogo\" height=\"40px\" width=\"40px\"/></a>\r\n\t<a [routerLink]=\"['profil']\"><img src=\"https://i.postimg.cc/P54GyQgx/profil.png\" alt=\"iconeprofile\" height=\"40px\" width=\"40px\"/></a>\r\n\t<a [routerLink]=\"['liste']\"><img src=\"https://i.postimg.cc/9rLpv024/liste.png\" alt=\"iconeliste\" height=\"40px\" width=\"40px\"/></a>\r\n\t<a [routerLink]=\"['famille']\"><img src=\"https://i.postimg.cc/rDzJcTyf/famille.png\" alt=\"iconefamille\" height=\"40px\" width=\"40px\"/></a>\r\n</header>\r\n<style>\r\n\tli {\r\n\t\tdisplay: inline-block;\r\n\t\tpadding-right: 10px;\r\n\t}\r\n\r\n\th2 {\r\n\t\tcolor: white;\r\n\t}\r\n</style>\r\n\r\n<!-- \r\nCopyright Google LLC. All Rights Reserved.\r\nUse of this source code is governed by an MIT-style license that\r\ncan be found in the LICENSE file at https://angular.io/license\r\n-->");

/***/ }),

/***/ "tO9y":
/*!*******************************************!*\
  !*** ./src/app/liste/liste.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0ZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "wJr2":
/*!**************************************************!*\
  !*** ./src/app/accueil/accueil.product.model.ts ***!
  \**************************************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
class Product {
}


/***/ }),

/***/ "y8Ub":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/famille/famille.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>Votre famille est composée de :</p>\r\n<ul *ngFor=\"let user of userList\">\r\n    <li>Nom: {{user.nom}} Prénom: {{user.prenom}}</li>\r\n</ul>");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]);
/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map