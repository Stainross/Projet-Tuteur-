import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { TopBarComponent } from "./top-bar/top-bar.component";
import { AccueilComponent } from "./accueil/accueil.component";
import { ProfilComponent } from "./profil/profil.component";
import { HelloComponent } from "./accueil/hello.component";
import { ListeComponent } from "./liste/liste.component";
import { FamilleComponent } from "./famille/famille.component";
//import Quagga from "quagga/type-definitions/quagga";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "", component: AccueilComponent },
      { path: "profil", component: ProfilComponent },
      { path: "liste", component: ListeComponent },
      { path: "famille", component: FamilleComponent },
      { path: "connexion", component: AppComponent}
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    //ProductListComponent,
    //ProductAlertsComponent,
    ListeComponent,
    AccueilComponent,
    ProfilComponent,
    FamilleComponent,
    HelloComponent
  ],
  providers:[
    AccueilComponent,
    ProfilComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
