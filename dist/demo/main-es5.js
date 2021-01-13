(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\Admin\Documents\IUT\projet4\Projet-Tuteure\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "1+jY":
    /*!**************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/accueil/accueil.component.html ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function jY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<script src=\"https://cdn.rawgit.com/serratus/quaggaJS/0420d5e0/dist/quagga.min.js\"></script>\r\n<script src=\"node_modules/quagga/quagga.min.js\"></script>\r\n\r\n\r\n<div  id=\"interactive\" class=\"viewport\" *ngIf=\"scanned==false\">\r\n\t<!-- QuaggaJS ici -->\t\r\n</div>\r\n<div *ngIf=\"scanned && identifie\" id=\"box\">\r\n\t<div id=\"score\">\r\n\t\t<h1 *ngIf=\"allergique==false\">Ce produit est bon pour vous</h1>\r\n\t\t<h1 *ngIf=\"allergique\">Attention ce produit contient des substances dont vous êtes allergiques!</h1>\r\n\t\t<h2>Allergènes: {{allergens}}</h2>\r\n\t\t<img class=\"label\" src={{novaGroup}} />\r\n\t\t<img class=\"label\" src={{nutriScore}} />\r\n\t</div>\r\n\t\t<img [src]=\"imageUrl\" />\r\n\t\t<br /><button type=\"button\" (click)=\"addToList()\" *ngIf=\"alreadyadded==false\">Ajouter à la liste</button>\r\n\t\t<p *ngIf=\"alreadyadded\">Ce produit est dans votre liste</p>\r\n\t\t<h2>{{name}}</h2>\r\n\t\t<p>Description du produit</p>\r\n\t\t<section class=\"portfolio-experiment\">\r\n\t\t\t<a (click)=\"anotherScan()\">\r\n\t\t\t  <span class=\"text\">Réessayer</span>\r\n\t\t\t  <span class=\"line -right\"></span>\r\n\t\t\t  <span class=\"line -top\"></span>\r\n\t\t\t  <span class=\"line -left\"></span>\r\n\t\t\t  <span class=\"line -bottom\"></span>\r\n\t\t\t</a>\r\n\t\t  </section>\r\n\t</div>\r\n<div *ngIf=\"scanned && identifie==false\" id=\"box2\">\r\n\t\r\n<H1>Le produit scanné n'a pas été reconnu.\r\n</H1>\r\n    <section class=\"portfolio-experiment\">\r\n        <a (click)=\"anotherScan()\">\r\n          <span class=\"text\">Réessayer</span>\r\n          <span class=\"line -right\"></span>\r\n          <span class=\"line -top\"></span>\r\n          <span class=\"line -left\"></span>\r\n          <span class=\"line -bottom\"></span>\r\n        </a>\r\n      </section>\r\n\r\n</div>";
      /***/
    },

    /***/
    "68Ew":
    /*!**************************************!*\
      !*** ./src/app/profil/allergenes.ts ***!
      \**************************************/

    /*! exports provided: Allergenes */

    /***/
    function Ew(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Allergenes", function () {
        return Allergenes;
      });

      var Allergenes = [{
        id: 1,
        nom: "lactose"
      }, {
        id: 2,
        nom: "fruit a coque"
      }, {
        id: 3,
        nom: "arachides"
      }, {
        id: 4,
        nom: "gluten"
      }];
      /***/
    },

    /***/
    "6P3Q":
    /*!**********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/liste/liste.component.html ***!
      \**********************************************************************************/

    /*! exports provided: default */

    /***/
    function P3Q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ul >\r\n    <li *ngFor=\"let product of productList\"><img src=\"{{product.imageUrl}}\"/><br /><h1>{{product.name}}</h1><br /><p>Allergènes: {{product.allergens}}</p><br /><button (click)=Supprimer(product)>Supprimer</button></li>    \r\n</ul>\r\n";
      /***/
    },

    /***/
    "85Lx":
    /*!********************************************!*\
      !*** ./src/app/accueil/hello.component.ts ***!
      \********************************************/

    /*! exports provided: HelloComponent */

    /***/
    function Lx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HelloComponent", function () {
        return HelloComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var HelloComponent = function HelloComponent() {
        _classCallCheck(this, HelloComponent);
      };

      HelloComponent.propDecorators = {
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        novaGroup: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        imageUrl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        nutriScore: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      HelloComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "hello",
        template: "\n    <h1>Nom: {{ name }}</h1>\n    <p>Nova:{{ novaGroup }} Nutri:{{ nutriScore }}</p>\n    <img src=\"{{ imageUrl }}\" />\n  ",
        styles: ["\n      h1 {\n        font-family: Lato;\n      }\n    "]
      })], HelloComponent);
      /***/
    },

    /***/
    "8IyQ":
    /*!********************************************!*\
      !*** ./src/app/profil/profil.component.ts ***!
      \********************************************/

    /*! exports provided: ProfilComponent */

    /***/
    function IyQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilComponent", function () {
        return ProfilComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_profil_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./profil.component.html */
      "aFPW");
      /* harmony import */


      var _profil_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./profil.component.css */
      "AYXS");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _profil_utilisateur_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./profil.utilisateur.model */
      "ehmE");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../app.component */
      "Sy1n");
      /* harmony import */


      var _allergenes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./allergenes */
      "68Ew");

      var ProfilComponent = /*#__PURE__*/function () {
        //allerg = [{ id: 1, nom: "lactose" }];
        function ProfilComponent(http, appc) {
          _classCallCheck(this, ProfilComponent);

          this.http = http;
          this.appc = appc;
          this.utilisateur = new _profil_utilisateur_model__WEBPACK_IMPORTED_MODULE_5__["Utilisateur"]();
          this.Allergenes = _allergenes__WEBPACK_IMPORTED_MODULE_7__["Allergenes"];
        }

        _createClass(ProfilComponent, [{
          key: "changeName",
          value: function changeName() {
            var valeur = prompt("Entrez le nouveau nom");
            this.nom = valeur;
            this.changeIntoDB();
          }
        }, {
          key: "changeFirstName",
          value: function changeFirstName() {
            var valeur = prompt("Entrez le nouveau prénom");
            this.prenom = valeur;
            this.changeIntoDB();
          }
        }, {
          key: "changeMail",
          value: function changeMail() {
            var valeur = prompt("Entrez la nouvelle adresse mail");
            this.email = valeur;
            this.changeIntoDB();
          }
        }, {
          key: "changeMDP",
          value: function changeMDP() {
            var valeur = prompt("Entrez le nouveau mot de passe");
            this.mdp = valeur;
            this.changeIntoDB();
          }
        }, {
          key: "changeIntoDB",
          value: function changeIntoDB() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var data;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.http.put('https://us-central1-projet-tuteure-42fc0.cloudfunctions.net/app/api/users/' + this.appc.id, {
                        prenom: this.prenom,
                        nom: this.nom,
                        email: this.email,
                        mdp: this.mdp,
                        allergenes: this.allerg
                      }).subscribe({
                        error: function error(_error) {
                          console.error('There was an error!', _error);
                        }
                      });

                    case 2:
                      data = _context.sent;

                    case 3:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "Ajoutallerg",
          value: function Ajoutallerg() {
            /*var nom = "gluten";
            var id = 2;
            this.allerg.push({ id, nom });*/
            for (var key in _allergenes__WEBPACK_IMPORTED_MODULE_7__["Allergenes"]) {
              if (_allergenes__WEBPACK_IMPORTED_MODULE_7__["Allergenes"][key]["id"] == this.selectedAlg) {
                var id = _allergenes__WEBPACK_IMPORTED_MODULE_7__["Allergenes"][key]["id"];
                var nom = _allergenes__WEBPACK_IMPORTED_MODULE_7__["Allergenes"][key]["nom"];
                var allergadded = false;

                for (var key2 in this.allerg) {
                  if (this.allerg[key2]["id"] == id) allergadded = true;
                }

                if (allergadded == false) this.allerg.push({
                  id: id,
                  nom: nom
                });
              }
            }

            this.changeIntoDB();
          }
        }, {
          key: "Retirer",
          value: function Retirer(index) {
            this.allerg.splice(index, 1);
            this.changeIntoDB();
          }
        }, {
          key: "getSelectedSkill",
          value: function getSelectedSkill() {
            console.log(this.selectedAlg);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this = this;

              var data, key;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      console.log("L'id est " + this.appc.id); //http://localhost:3000/api/users
                      //https://firestore.googleapis.com/v1/projects/projet-tuteure-42fc0/databases/(default)/documents/listes

                      _context2.next = 3;
                      return this.http.get('https://us-central1-projet-tuteure-42fc0.cloudfunctions.net/app/api/users', {
                        responseType: "json"
                      }).toPromise();

                    case 3:
                      data = _context2.sent;
                      console.log(data);

                      for (key in data) {
                        if (data[key]["id"] == this.appc.id) {
                          this.utilisateur = {
                            id: data[key]["data"]["id"],
                            nom: data[key]["data"]["nom"],
                            prenom: data[key]["data"]["prenom"],
                            email: data[key]["data"]["email"],
                            mdp: data[key]["data"]["mdp"],
                            allerg: data[key]["data"]["allergenes"]
                          };
                        }
                      }

                      Promise.resolve(this.utilisateur).then(function (value) {
                        _this.nom = value.nom;
                        _this.prenom = value.prenom;
                        _this.email = value.email;
                        _this.allerg = value.allerg;
                        _this.appc.allerg = value.allerg;
                      });

                    case 7:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return ProfilComponent;
      }();

      ProfilComponent.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }, {
          type: _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]
        }];
      };

      ProfilComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-profil",
        template: _raw_loader_profil_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_profil_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ProfilComponent);
      /***/
    },

    /***/
    "A3xY":
    /*!***********************************!*\
      !*** ./src/app/app.component.css ***!
      \***********************************/

    /*! exports provided: default */

    /***/
    function A3xY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "p {\r\n  font-family: Lato;\r\n}\r\nbody{\r\n  background-color :#A9CCE3; \r\n  text-align: center;\r\n  margin-top: 1cm;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakIiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcclxuICBmb250LWZhbWlseTogTGF0bztcclxufVxyXG5ib2R5e1xyXG4gIGJhY2tncm91bmQtY29sb3IgOiNBOUNDRTM7IFxyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAxY207XHJcbn1cclxuXHJcbiJdfQ== */";
      /***/
    },

    /***/
    "AYXS":
    /*!*********************************************!*\
      !*** ./src/app/profil/profil.component.css ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function AYXS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWwuY29tcG9uZW50LmNzcyJ9 */";
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
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

      /***/
    },

    /***/
    "EmOr":
    /*!***********************************************!*\
      !*** ./src/app/accueil/accueil.component.css ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function EmOr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "img {\r\n  height: 150px;\r\n  width: auto;\r\n}\r\n.label {\r\n  height: 50px;\r\n  margin-bottom: 0px;\r\n  margin-top: 0px;\r\n  margin-left: 20px;\r\n  margin-right: 20px;\r\n}\r\np {\r\n  width: 140px;\r\n  text-align: center;\r\n  display: inline-block;\r\n}\r\n#box {\r\n  width: 100%;\r\n  text-align: center;\r\n  color: blue;\r\n}\r\n#score {\r\n  width: 100%;\r\n}\r\nbody{\r\n  background-color :#A9CCE3; \r\n  text-align: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY3VlaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixXQUFXO0FBQ2I7QUFDQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6ImFjY3VlaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XHJcbiAgaGVpZ2h0OiAxNTBweDtcclxuICB3aWR0aDogYXV0bztcclxufVxyXG4ubGFiZWwge1xyXG4gIGhlaWdodDogNTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgbWFyZ2luLXRvcDogMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG5wIHtcclxuICB3aWR0aDogMTQwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG4jYm94IHtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6IGJsdWU7XHJcbn1cclxuI3Njb3JlIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5ib2R5e1xyXG4gIGJhY2tncm91bmQtY29sb3IgOiNBOUNDRTM7IFxyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "I2e7":
    /*!**********************************************!*\
      !*** ./src/app/accueil/accueil.component.ts ***!
      \**********************************************/

    /*! exports provided: AccueilComponent */

    /***/
    function I2e7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccueilComponent", function () {
        return AccueilComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_accueil_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./accueil.component.html */
      "1+jY");
      /* harmony import */


      var _accueil_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./accueil.component.css */
      "EmOr");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _accueil_product_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./accueil.product.model */
      "wJr2");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../app.component */
      "Sy1n");
      /* harmony import */


      var _profil_profil_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../profil/profil.component */
      "8IyQ");
      /* harmony import */


      var quagga__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! quagga */
      "igAG");
      /* harmony import */


      var quagga__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(quagga__WEBPACK_IMPORTED_MODULE_9__);
      /*@Injectable({
        providedIn:'root'
      })
      export class ConfigService {
        constructor(private http: HttpClient) {}
      }*/


      var AccueilComponent = /*#__PURE__*/function () {
        function AccueilComponent(httpClient, appc, profil, router) {
          _classCallCheck(this, AccueilComponent);

          this.httpClient = httpClient;
          this.appc = appc;
          this.profil = profil;
          this.router = router;
          this.url = "https://world.openfoodfacts.org/api/v0/product/";
          this.product = new _accueil_product_model__WEBPACK_IMPORTED_MODULE_6__["Product"]();
          this.name = "";
          this.barcode = "";
          this.scanned = false;
          this.identifie = false;
          this.alreadyadded = false;
          this.allergique = false;
          this.novaGroup = "";
          this.imageUrl = "";
          this.nutriScore = "";
          this.allergens = "";
          this.title = "app-projettut";
          this.ngOnInit();
        }

        _createClass(AccueilComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.scan();
          }
        }, {
          key: "addToList",
          value: function addToList() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this2 = this;

              var data2;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      console.log(this.barcode);
                      console.log(this.appc.idfamille); //
                      //http://localhost:3000/api/listeshttps://firestore.googleapis.com/v1/projects/projet-tuteure-42fc0/databases/(default)/documents/listes

                      _context3.next = 4;
                      return this.httpClient.post('https://us-central1-projet-tuteure-42fc0.cloudfunctions.net/app/api/listes', {
                        barcode: this.barcode,
                        idfamille: this.appc.idfamille
                      }).subscribe({
                        error: function error(_error2) {
                          _this2.errorMessage = _error2.message;
                          console.error('There was an error!', _error2);
                        }
                      });

                    case 4:
                      data2 = _context3.sent;
                      console.log(data2);
                      console.log("produit ajouté");

                    case 7:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "getProductData",
          value: function getProductData(barcode) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var data;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      console.log(barcode);
                      _context4.next = 3;
                      return this.httpClient.get(this.url + barcode + ".json", {
                        responseType: "json"
                      }).toPromise();

                    case 3:
                      data = _context4.sent;
                      console.log("madata " + data);

                      try {
                        this.product = {
                          name: data["product"]["product_name"],
                          novaGroup: data["product"]["nova_group"],
                          imageUrl: data["product"]["image_small_url"],
                          nutriScore: data["product"]["nutriscore_grade"],
                          allergens: data["product"]["allergens"].replace(/en:/gi, "")
                        };
                      } catch (error) {
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


                      return _context4.abrupt("return", this.product);

                    case 7:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "scan",
          value: function scan() {
            var _this3 = this;

            setTimeout(function () {
              quagga__WEBPACK_IMPORTED_MODULE_9___default.a.init({
                inputStream: {
                  constraints: {
                    facingMode: 'environment' // restrict camera type

                  },
                  area: {
                    top: '40%',
                    right: '0%',
                    left: '0%',
                    bottom: '40%' // bottom offset

                  }
                },
                decoder: {
                  readers: ['ean_reader'],
                  debug: {
                    drawBoundingBox: true,
                    showFrequency: true,
                    drawScanline: true,
                    showPattern: true
                  }
                }
              }, function (err) {
                if (err) {
                  _this3.errorMessage = "Probleme initialisation QuaggaJS : ".concat(err);
                  console.log(_this3.errorMessage);
                } else {
                  console.log("oui");
                  quagga__WEBPACK_IMPORTED_MODULE_9___default.a.start();
                  quagga__WEBPACK_IMPORTED_MODULE_9___default.a.onDetected(function (codeB) {
                    _this3.scanned = true;
                    console.log(codeB.codeResult.code);
                    _this3.barcode = codeB.codeResult.code;

                    _this3.setInformations(codeB.codeResult.code);

                    quagga__WEBPACK_IMPORTED_MODULE_9___default.a.stop();
                  });
                }
              });
            }, 1000);
          }
        }, {
          key: "anotherScan",
          value: function anotherScan() {
            this.scanned = false;
            this.scan();
          }
        }, {
          key: "setInformations",
          value: function setInformations(barcode) {
            var _this4 = this;

            console.log("bien entré");
            console.log(barcode);
            this.scanned = true;
            Promise.resolve(this.getProductData(barcode)).then(function (value) {
              if (value.name != "") {
                _this4.name = value.name;
                _this4.identifie = true;
                console.log("le produit est introuvable");
              } else {
                _this4.identifie = false;
                return 0;
              }

              switch (Number(value.novaGroup)) {
                case 1:
                  {
                    value.novaGroup = "https://i.postimg.cc/sMLHBcT9/nova1.png";
                    break;
                  }

                case 2:
                  {
                    value.novaGroup = "https://i.postimg.cc/XrqD7hkY/nova2.png";
                    break;
                  }

                case 3:
                  {
                    value.novaGroup = "https://i.postimg.cc/TpC4xGms/nova3.png";
                    break;
                  }

                case 4:
                  {
                    value.novaGroup = "https://i.postimg.cc/N5gzZLyT/nova4.png";
                    break;
                  }

                default:
                  {
                    break;
                  }
              }

              switch (value.nutriScore) {
                case "a":
                  {
                    value.nutriScore = "https://i.postimg.cc/s1NvBGp9/nutriA.png";
                    break;
                  }

                case "b":
                  {
                    value.nutriScore = "https://i.postimg.cc/gnLr3cs9/nutriB.png";
                    break;
                  }

                case "c":
                  {
                    value.nutriScore = "https://i.postimg.cc/vDB4Ht6Z/nutriC.png";
                    break;
                  }

                case "d":
                  {
                    value.nutriScore = "https://i.postimg.cc/QKHC4jrT/nutriD.png";
                    break;
                  }

                case "e":
                  {
                    value.nutriScore = "https://i.postimg.cc/cg1r3Q9T/nutriE.png";
                    break;
                  }

                default:
                  {
                    break;
                  }
              }

              _this4.imageUrl = value.imageUrl;
              _this4.nutriScore = value.nutriScore;
              _this4.allergens = value.allergens;
              _this4.novaGroup = value.novaGroup;
              _this4.allergique = false;

              for (var key in _this4.allergens.split(",")) {
                console.log("all du prod" + _this4.allergens.split(",")[key]);

                for (var key2 in _this4.appc.allerg) {
                  console.log("all user" + _this4.appc.allerg[key2]["nom"]);

                  if (_this4.allergens.split(",")[key] == _this4.appc.allerg[key2]["nom"]) {
                    console.log("Attention vous êtes allergique");
                    _this4.allergique = true;
                  }
                }
              }
            });
          }
        }]);

        return AccueilComponent;
      }();

      AccueilComponent.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }, {
          type: _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]
        }, {
          type: _profil_profil_component__WEBPACK_IMPORTED_MODULE_8__["ProfilComponent"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      };

      AccueilComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-accueil",
        template: _raw_loader_accueil_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_accueil_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AccueilComponent);
      /***/
    },

    /***/
    "K+Mw":
    /*!******************************************!*\
      !*** ./src/app/liste/liste.component.ts ***!
      \******************************************/

    /*! exports provided: ListeComponent */

    /***/
    function KMw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListeComponent", function () {
        return ListeComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_liste_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./liste.component.html */
      "6P3Q");
      /* harmony import */


      var _liste_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./liste.component.css */
      "tO9y");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _accueil_accueil_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../accueil/accueil.component */
      "I2e7");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../app.component */
      "Sy1n");

      var ListeComponent = /*#__PURE__*/function () {
        function ListeComponent(http, test, appc) {
          _classCallCheck(this, ListeComponent);

          this.http = http;
          this.test = test;
          this.appc = appc;
        }

        _createClass(ListeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var data, key;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      console.log("zersfszfsdef");
                      this.productList = []; //https://firestore.googleapis.com/v1/projects/projet-tuteure-42fc0/databases/(default)/documents/listes
                      //http://localhost:3000/api/listes

                      _context5.next = 4;
                      return this.http.get('https://us-central1-projet-tuteure-42fc0.cloudfunctions.net/app/api/listes', {
                        responseType: "json"
                      }).toPromise();

                    case 4:
                      data = _context5.sent;
                      console.log(this.appc.idfamille);
                      _context5.t0 = regeneratorRuntime.keys(data);

                    case 7:
                      if ((_context5.t1 = _context5.t0()).done) {
                        _context5.next = 26;
                        break;
                      }

                      key = _context5.t1.value;

                      if (!(data[key]['data']['idfamille'] == this.appc.idfamille)) {
                        _context5.next = 24;
                        break;
                      }

                      this.test.getProductData(data[key]['data']['barcode']);
                      _context5.t2 = this.productList;
                      _context5.next = 14;
                      return Promise.resolve(this.test.getProductData(data[key]['data']['barcode']));

                    case 14:
                      _context5.t3 = _context5.sent;

                      _context5.t2.push.call(_context5.t2, _context5.t3);

                      _context5.t4 = console;
                      _context5.next = 19;
                      return Promise.resolve(this.test.getProductData(data[key]['data']['barcode']));

                    case 19:
                      _context5.next = 21;
                      return _context5.sent.imageUrl;

                    case 21:
                      _context5.t5 = _context5.sent;

                      _context5.t4.log.call(_context5.t4, _context5.t5);

                      console.log("oui");

                    case 24:
                      _context5.next = 7;
                      break;

                    case 26:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "Supprimer",
          value: function Supprimer(product) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var index, data, key, data2;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      index = this.productList.indexOf(product);
                      this.productList.splice(index, 1);
                      console.log("index:" + index);
                      _context6.next = 5;
                      return this.http.get('https://us-central1-projet-tuteure-42fc0.cloudfunctions.net/app/api/listes', {
                        responseType: "json"
                      }).toPromise();

                    case 5:
                      data = _context6.sent;
                      _context6.t0 = regeneratorRuntime.keys(data);

                    case 7:
                      if ((_context6.t1 = _context6.t0()).done) {
                        _context6.next = 20;
                        break;
                      }

                      key = _context6.t1.value;
                      _context6.t2 = data[key]['data']['idfamille'] == this.appc.idfamille;

                      if (!_context6.t2) {
                        _context6.next = 16;
                        break;
                      }

                      _context6.next = 13;
                      return this.test.getProductData(data[key]['data']['barcode']);

                    case 13:
                      _context6.t3 = _context6.sent.name;
                      _context6.t4 = product.name;
                      _context6.t2 = _context6.t3 == _context6.t4;

                    case 16:
                      if (!_context6.t2) {
                        _context6.next = 18;
                        break;
                      }

                      data2 = this.http["delete"]('https://us-central1-projet-tuteure-42fc0.cloudfunctions.net/app/api/listes/' + data[key]['id'], {}).subscribe({
                        error: function error(_error3) {
                          console.error('There was an error!', _error3);
                        }
                      });

                    case 18:
                      _context6.next = 7;
                      break;

                    case 20:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }]);

        return ListeComponent;
      }();

      ListeComponent.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }, {
          type: _accueil_accueil_component__WEBPACK_IMPORTED_MODULE_5__["AccueilComponent"]
        }, {
          type: _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]
        }];
      };

      ListeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-liste",
        template: _raw_loader_liste_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_liste_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ListeComponent);
      /***/
    },

    /***/
    "Kyzr":
    /*!***********************************************!*\
      !*** ./src/app/top-bar/top-bar.component.css ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function Kyzr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "header{\r\n\r\n    color:white;\r\n    background: linear-gradient(to right, #f8a5c2 0%, #c44569 100%);\r\n    border-style: solid;\r\n    border-color: #c44569;\r\n    padding: 0.5cm;\r\n    text-align: center;\r\n    padding-top: 5px ;\r\n    max-height: 70px;\r\n}\r\n.ima{\r\n    margin-top: 10px;\r\n}\r\n.container {\r\n  display: table;\r\n  height: 95vh;\r\n  padding-bottom: 5vh;\r\n  margin: auto auto;\r\n  z-index: -1;\r\n}\r\nh1 {\r\n  font-family: \"Lato\", sans-serif;\r\n  font-size: 36px;\r\n  font-weight: 300;\r\n  color: #FFFFFF;\r\n}\r\n.icon-container {\r\n  margin-top: 10px;\r\n  width: 100%;\r\n  height: 60px;\r\n  \r\n}\r\n.icon {\r\n  cursor: pointer;\r\n  position: relative;\r\n  display: inline-block;\r\n  width: 60px;\r\n  height: 60px;\r\n  margin-left: 12px;\r\n  margin-right: 12px;\r\n  border-radius: 30px;\r\n  overflow: hidden;\r\n}\r\n.icon::before, .icon::after {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  height: 100%;\r\n  width: 100%;\r\n  transition: all 0.25s ease;\r\n  border-radius: 30px;\r\n}\r\n.icon i {\r\n  position: relative;\r\n  color: #FFFFFF;\r\n  font-size: 30px;\r\n  margin-top: 15px;\r\n  transition: all 0.25s ease;\r\n \r\n}\r\n.icon-fill::before {\r\n  transition-duration: 0.5s;\r\n  box-shadow: inset 0 0 0 1px #16A085;\r\n}\r\n.icon-fill:hover::before {\r\n  box-shadow: inset 0 0 0 60px #16A085;\r\n}\r\n.icon-enter::after {\r\n  box-shadow: inset 0 0 0 1px #EB9532;\r\n}\r\n.icon-enter::before {\r\n  border-radius: 0;\r\n  margin-left: -100%;\r\n  box-shadow: inset 0 0 0 60px #EB9532;\r\n}\r\n.icon-enter:hover::before {\r\n  margin-left: 0;\r\n}\r\n.icon-expand::after {\r\n  box-shadow: inset 0 0 0 1px #C82647;\r\n}\r\n.icon-expand::before {\r\n  background: #C82647;\r\n  box-shadow: inset 0 0 0 60px rgba(255, 255, 255, .4);\r\n  \r\n}\r\n.icon-expand:hover::before {\r\n  box-shadow: inset 0 0 0 1px #2d2c3e;\r\n\r\n}\r\n.icon-collapse::before {\r\n  border-radius: 0;\r\n}\r\n.icon-collapse:hover::before {\r\n  box-shadow: inset 0 30px 0 0 #8CC63F, inset 0 -30px 0 0 #8CC63F;\r\n}\r\n.icon-collapse::after {\r\n  box-shadow: inset 0 0 0 1px #8CC63F;\r\n}\r\n/*# sourceMappingURL=top-bar.component.css.map */\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvcC1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxXQUFXO0lBQ1gsK0RBQStEO0lBQy9ELG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFFQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixXQUFXO0FBQ2I7QUFHQTtFQUNFLCtCQUErQjtFQUMvQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7QUFHQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsWUFBWTs7QUFFZDtBQUdBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxZQUFZO0VBQ1osV0FBVztFQUNYLDBCQUEwQjtFQUMxQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQiwwQkFBMEI7O0FBRTVCO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsbUNBQW1DO0FBQ3JDO0FBQ0E7RUFDRSxvQ0FBb0M7QUFDdEM7QUFFQTtFQUNFLG1DQUFtQztBQUNyQztBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixvQ0FBb0M7QUFDdEM7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLG1DQUFtQztBQUNyQztBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLG9EQUFvRDs7QUFFdEQ7QUFDQTtFQUNFLG1DQUFtQzs7QUFFckM7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsK0RBQStEO0FBQ2pFO0FBQ0E7RUFDRSxtQ0FBbUM7QUFDckM7QUFFQSxnREFBZ0QiLCJmaWxlIjoidG9wLWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaGVhZGVye1xyXG5cclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZjhhNWMyIDAlLCAjYzQ0NTY5IDEwMCUpO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogI2M0NDU2OTtcclxuICAgIHBhZGRpbmc6IDAuNWNtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDVweCA7XHJcbiAgICBtYXgtaGVpZ2h0OiA3MHB4O1xyXG59XHJcbi5pbWF7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxuICBoZWlnaHQ6IDk1dmg7XHJcbiAgcGFkZGluZy1ib3R0b206IDV2aDtcclxuICBtYXJnaW46IGF1dG8gYXV0bztcclxuICB6LWluZGV4OiAtMTtcclxufVxyXG5cclxuXHJcbmgxIHtcclxuICBmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAzNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgY29sb3I6ICNGRkZGRkY7XHJcbn1cclxuXHJcblxyXG4uaWNvbi1jb250YWluZXIge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIFxyXG59XHJcblxyXG5cclxuLmljb24ge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiA2MHB4O1xyXG4gIGhlaWdodDogNjBweDtcclxuICBtYXJnaW4tbGVmdDogMTJweDtcclxuICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5pY29uOjpiZWZvcmUsIC5pY29uOjphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbn1cclxuLmljb24gaSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGNvbG9yOiAjRkZGRkZGO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlO1xyXG4gXHJcbn1cclxuXHJcbi5pY29uLWZpbGw6OmJlZm9yZSB7XHJcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC41cztcclxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggIzE2QTA4NTtcclxufVxyXG4uaWNvbi1maWxsOmhvdmVyOjpiZWZvcmUge1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDYwcHggIzE2QTA4NTtcclxufVxyXG5cclxuLmljb24tZW50ZXI6OmFmdGVyIHtcclxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggI0VCOTUzMjtcclxufVxyXG4uaWNvbi1lbnRlcjo6YmVmb3JlIHtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTAwJTtcclxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCA2MHB4ICNFQjk1MzI7XHJcbn1cclxuLmljb24tZW50ZXI6aG92ZXI6OmJlZm9yZSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDA7XHJcbn1cclxuXHJcbi5pY29uLWV4cGFuZDo6YWZ0ZXIge1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCAjQzgyNjQ3O1xyXG59XHJcbi5pY29uLWV4cGFuZDo6YmVmb3JlIHtcclxuICBiYWNrZ3JvdW5kOiAjQzgyNjQ3O1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDYwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAuNCk7XHJcbiAgXHJcbn1cclxuLmljb24tZXhwYW5kOmhvdmVyOjpiZWZvcmUge1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCAjMmQyYzNlO1xyXG5cclxufVxyXG5cclxuLmljb24tY29sbGFwc2U6OmJlZm9yZSB7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxufVxyXG4uaWNvbi1jb2xsYXBzZTpob3Zlcjo6YmVmb3JlIHtcclxuICBib3gtc2hhZG93OiBpbnNldCAwIDMwcHggMCAwICM4Q0M2M0YsIGluc2V0IDAgLTMwcHggMCAwICM4Q0M2M0Y7XHJcbn1cclxuLmljb24tY29sbGFwc2U6OmFmdGVyIHtcclxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggIzhDQzYzRjtcclxufVxyXG5cclxuLyojIHNvdXJjZU1hcHBpbmdVUkw9dG9wLWJhci5jb21wb25lbnQuY3NzLm1hcCAqL1xyXG4iXX0= */";
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _app_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component.css */
      "A3xY");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var md5 = __webpack_require__(
      /*! md5 */
      "aCH8");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(http) {
          _classCallCheck(this, AppComponent);

          this.http = http;
          this.connected = false;
        }

        _createClass(AppComponent, [{
          key: "onSubmit",
          value: function onSubmit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var data, key;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      console.log("connexion"); //http://localhost:3000/api/users
                      //https://firestore.googleapis.com/v1/projects/projet-tuteure-42fc0/databases/(default)/documents/listes

                      _context7.next = 3;
                      return this.http.get('https://us-central1-projet-tuteure-42fc0.cloudfunctions.net/app/api/users', {
                        responseType: "json"
                      }).toPromise();

                    case 3:
                      data = _context7.sent;
                      console.log(data);

                      for (key in data) {
                        if (this.mdp.nativeElement.value == data[key]["data"]["mdp"] && this.email.nativeElement.value == data[key]["data"]["email"]) {
                          console.log("Vous êtes connecté");
                          console.log("Id =" + data[key]["id"] + " idfamille = " + data[key]["data"]["idfamille"]);
                          this.id = data[key]["id"];
                          this.idfamille = data[key]["data"]["idfamille"];
                          this.allerg = data[key]["data"]["allergenes"];
                          this.connected = true;
                        } else {
                          console.log("Identifiant ou mot de passe incorrect");
                        }
                      }

                    case 6:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }];
      };

      AppComponent.propDecorators = {
        email: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['email']
        }],
        mdp: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['mdp']
        }]
      };
      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "my-app",
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AppComponent);
      /*
      Copyright Google LLC. All Rights Reserved.
      Use of this source code is governed by an MIT-style license that
      can be found in the LICENSE file at https://angular.io/license
      */

      /***/
    },

    /***/
    "VzVu":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<body>\r\n<div class=\"connexion\" *ngIf=\"connected==false\">\r\n\t<p>admin@example.com</p><p>admin123456</p>\r\n\t<label>Mail</label>\r\n\t<input type=\"text\" #email/>\r\n\t<label>Mot de passe</label>\r\n\t<input type=\"text\" #mdp/>\r\n\t<button (click)=\"onSubmit()\">Se connecter</button>\r\n</div>\r\n<app-top-bar *ngIf=\"connected\"></app-top-bar>\r\n<div class=\"container\" *ngIf=\"connected\">\r\n\t<router-outlet></router-outlet>\r\n</div>\r\n</body>\r\n<!-- \r\nCopyright Google LLC. All Rights Reserved.\r\nUse of this source code is governed by an MIT-style license that\r\ncan be found in the LICENSE file at https://angular.io/license\r\n-->\r\n  ";
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./top-bar/top-bar.component */
      "oDk3");
      /* harmony import */


      var _accueil_accueil_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./accueil/accueil.component */
      "I2e7");
      /* harmony import */


      var _profil_profil_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./profil/profil.component */
      "8IyQ");
      /* harmony import */


      var _accueil_hello_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./accueil/hello.component */
      "85Lx");
      /* harmony import */


      var _liste_liste_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./liste/liste.component */
      "K+Mw");
      /* harmony import */


      var _famille_famille_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./famille/famille.component */
      "ZkRK"); //import Quagga from "quagga/type-definitions/quagga";


      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([{
          path: "",
          component: _accueil_accueil_component__WEBPACK_IMPORTED_MODULE_8__["AccueilComponent"]
        }, {
          path: "profil",
          component: _profil_profil_component__WEBPACK_IMPORTED_MODULE_9__["ProfilComponent"]
        }, {
          path: "liste",
          component: _liste_liste_component__WEBPACK_IMPORTED_MODULE_11__["ListeComponent"]
        }, {
          path: "famille",
          component: _famille_famille_component__WEBPACK_IMPORTED_MODULE_12__["FamilleComponent"]
        }])],
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_7__["TopBarComponent"], //ProductListComponent,
        //ProductAlertsComponent,
        _liste_liste_component__WEBPACK_IMPORTED_MODULE_11__["ListeComponent"], _accueil_accueil_component__WEBPACK_IMPORTED_MODULE_8__["AccueilComponent"], _profil_profil_component__WEBPACK_IMPORTED_MODULE_9__["ProfilComponent"], _famille_famille_component__WEBPACK_IMPORTED_MODULE_12__["FamilleComponent"], _accueil_hello_component__WEBPACK_IMPORTED_MODULE_10__["HelloComponent"]],
        providers: [_accueil_accueil_component__WEBPACK_IMPORTED_MODULE_8__["AccueilComponent"], _profil_profil_component__WEBPACK_IMPORTED_MODULE_9__["ProfilComponent"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
      })], AppModule);
      /*
      Copyright Google LLC. All Rights Reserved.
      Use of this source code is governed by an MIT-style license that
      can be found in the LICENSE file at https://angular.io/license
      */

      /***/
    },

    /***/
    "ZkRK":
    /*!**********************************************!*\
      !*** ./src/app/famille/famille.component.ts ***!
      \**********************************************/

    /*! exports provided: FamilleComponent */

    /***/
    function ZkRK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FamilleComponent", function () {
        return FamilleComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_famille_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./famille.component.html */
      "y8Ub");
      /* harmony import */


      var _famille_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./famille.component.css */
      "cfB5");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../app.component */
      "Sy1n");
      /* harmony import */


      var _profil_profil_utilisateur_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../profil/profil.utilisateur.model */
      "ehmE");

      var FamilleComponent = /*#__PURE__*/function () {
        function FamilleComponent(http, appc) {
          _classCallCheck(this, FamilleComponent);

          this.http = http;
          this.appc = appc;
          this.utilisateur = new _profil_profil_utilisateur_model__WEBPACK_IMPORTED_MODULE_6__["Utilisateur"]();
        }

        _createClass(FamilleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var data, key;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      this.userList = []; //https://firestore.googleapis.com/v1/projects/projet-tuteure-42fc0/databases/(default)/documents/utilisateurs
                      //http://localhost:3000/api/users

                      _context8.next = 3;
                      return this.http.get('https://us-central1-projet-tuteure-42fc0.cloudfunctions.net/app/api/users', {
                        responseType: "json"
                      }).toPromise();

                    case 3:
                      data = _context8.sent;

                      for (key in data) {
                        if (data[key]['data']['idfamille'] == this.appc.idfamille) {
                          this.userList.push(this.utilisateur = {
                            id: data[key]["data"]["id"],
                            nom: data[key]["data"]["nom"],
                            prenom: data[key]["data"]["prenom"],
                            email: data[key]["data"]["email"],
                            mdp: data[key]["data"]["mdp"],
                            allerg: data[key]["data"]["allergenes"]
                          });
                        }
                      }

                    case 5:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
        }]);

        return FamilleComponent;
      }();

      FamilleComponent.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
        }];
      };

      FamilleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: "app-famille",
        template: _raw_loader_famille_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_famille_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], FamilleComponent);
      /***/
    },

    /***/
    "aFPW":
    /*!************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profil/profil.component.html ***!
      \************************************************************************************/

    /*! exports provided: default */

    /***/
    function aFPW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<script src=\"../server.js\"></script>\r\n<h2>Nom:{{nom}}</h2>\r\n<button (click)=changeName()>Nom</button><br/>\r\n<h2>Prénom:{{prenom}}</h2>\r\n<button (click)=changeFirstName()>Prénom</button><br/>\r\n<h2>Adresse mail:{{email}}</h2>\r\n<button (click)=changeMail()>Mail</button><br/>\r\n<button (click)=changeMDP()>Mot de Passe</button><br/>\r\n\r\n\r\n<label>Allergene</label>\r\n<div *ngFor=\"let allerg of allerg;let myIndex=index;\"> {{allerg.nom}} <button (click)=Retirer(myIndex)>Retirer</button></div>\r\n<select id=\"allergenes\" [(ngModel)]=\"selectedAlg\"\r\n(change)=\"getSelectedSkill()\">\r\n    <option *ngFor=\"let alg of Allergenes\" [ngValue]=\"alg.id\">\r\n      {{alg.nom}}\r\n    </option>\r\n    \r\n</select>\r\n\r\n<button (click)=Ajoutallerg()>Ajouter</button>\r\n<style>\r\n\tbutton {\r\n\t\tmargin-top: 10px;\r\n\t}\r\n</style>";
      /***/
    },

    /***/
    "cfB5":
    /*!***********************************************!*\
      !*** ./src/app/famille/famille.component.css ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function cfB5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmYW1pbGxlLmNvbXBvbmVudC5jc3MifQ== */";
      /***/
    },

    /***/
    "crnd":
    /*!**********************************************************!*\
      !*** ./src/$$_lazy_route_resource lazy namespace object ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function crnd(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "crnd";
      /***/
    },

    /***/
    "ehmE":
    /*!****************************************************!*\
      !*** ./src/app/profil/profil.utilisateur.model.ts ***!
      \****************************************************/

    /*! exports provided: Utilisateur */

    /***/
    function ehmE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Utilisateur", function () {
        return Utilisateur;
      });

      var Utilisateur = function Utilisateur() {
        _classCallCheck(this, Utilisateur);
      };
      /***/

    },

    /***/
    "oDk3":
    /*!**********************************************!*\
      !*** ./src/app/top-bar/top-bar.component.ts ***!
      \**********************************************/

    /*! exports provided: TopBarComponent */

    /***/
    function oDk3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TopBarComponent", function () {
        return TopBarComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_top_bar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./top-bar.component.html */
      "ogDu");
      /* harmony import */


      var _top_bar_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./top-bar.component.css */
      "Kyzr");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var TopBarComponent = /*#__PURE__*/function () {
        function TopBarComponent() {
          _classCallCheck(this, TopBarComponent);
        }

        _createClass(TopBarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return TopBarComponent;
      }();

      TopBarComponent.ctorParameters = function () {
        return [];
      };

      TopBarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-top-bar",
        template: _raw_loader_top_bar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_top_bar_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], TopBarComponent);
      /*
      Copyright Google LLC. All Rights Reserved.
      Use of this source code is governed by an MIT-style license that
      can be found in the LICENSE file at https://angular.io/license
      */

      /***/
    },

    /***/
    "ogDu":
    /*!**************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/top-bar/top-bar.component.html ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function ogDu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\r\n\r\n<header>\r\n    <div class=\"container\">\r\n        <div class=\"content\">\r\n          <div class=\"icon-container\">\r\n            <a [routerLink]=\"['/']\"><div class=\"icon icon-fill\"><i class=\"fa fa-home\"><img src=\"https://i.postimg.cc/fJzC2XGn/accueil.png\" class=\"ima\" alt=\"iconelogo\" height=\"40px\" width=\"40px\"/></i></div></a>\r\n            <a [routerLink]=\"['profil']\"><div class=\"icon icon-enter\"><i class=\"fa fa-user\"><img src=\"https://i.postimg.cc/P54GyQgx/profil.png\" class=\"ima\" alt=\"iconeprofile\" height=\"40px\" width=\"40px\"/></i></div></a>\r\n            <a [routerLink]=\"['liste']\"><div class=\"icon icon-expand\"><i class=\"fa fa-bars\"><img src=\"https://i.postimg.cc/9rLpv024/liste.png\" class=\"ima\" alt=\"iconeliste\" height=\"40px\" width=\"40px\"/></i></div></a>\r\n            <a [routerLink]=\"['famille']\"><div class=\"icon icon-collapse\"><i class=\"fa fa-sign-in\"><img src=\"https://i.postimg.cc/rDzJcTyf/famille.png\" class=\"ima\" alt=\"iconefamille\" height=\"40px\" width=\"40px\"/></i></div></a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n</header>\r\n<style>\r\n\tli {\r\n\t\tdisplay: inline-block;\r\n\t\tpadding-right: 10px;\r\n\t}\r\n\r\n\th2 {\r\n\t\tcolor: white;\r\n\t}\r\n</style>\r\n\r\n<!-- \r\nCopyright Google LLC. All Rights Reserved.\r\nUse of this source code is governed by an MIT-style license that\r\ncan be found in the LICENSE file at https://angular.io/license\r\n-->";
      /***/
    },

    /***/
    "tO9y":
    /*!*******************************************!*\
      !*** ./src/app/liste/liste.component.css ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function tO9y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "li{\n  list-style-type: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3RlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7QUFDdkIiLCJmaWxlIjoibGlzdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImxpe1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG4iXX0= */";
      /***/
    },

    /***/
    "wJr2":
    /*!**************************************************!*\
      !*** ./src/app/accueil/accueil.product.model.ts ***!
      \**************************************************/

    /*! exports provided: Product */

    /***/
    function wJr2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Product", function () {
        return Product;
      });

      var Product = function Product() {
        _classCallCheck(this, Product);
      };
      /***/

    },

    /***/
    "y8Ub":
    /*!**************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/famille/famille.component.html ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function y8Ub(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>Votre famille est composée de :</p>\r\n<ul *ngFor=\"let user of userList\">\r\n    <li>Nom: {{user.nom}} Prénom: {{user.prenom}}</li>\r\n</ul>";
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "a3Wg");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]);
      /*
      Copyright Google LLC. All Rights Reserved.
      Use of this source code is governed by an MIT-style license that
      can be found in the LICENSE file at https://angular.io/license
      */

      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map