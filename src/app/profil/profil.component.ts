import { Component, OnInit } from "@angular/core";
import { BddserviceService } from "../bddservice.service";
@Component({
  selector: "app-profil",
  templateUrl: "./profil.component.html",
  styleUrls: ["./profil.component.css"]
})
export class ProfilComponent implements OnInit {
  constructor(private bddService : BddserviceService) {}

  ngOnInit() {
    this.bddService.creerBdd();
    this.bddService.creerUtilisateur();
    this.bddService.voirUtilisateur();
  }
}
