export class Utilisateur {
    id: string;
    nom: string;
    prenom: string;
    email: string;
    mdp: string;
    allerg: [{id:number,nom:string}];
  }