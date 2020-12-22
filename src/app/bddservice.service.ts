import { Injectable } from '@angular/core';
import * as angular from "angular";

//import Sqlite from 'angular-sqlite';
//import Sqlite = require('angular-sqlite');
//var MyApp= angular.module('projet-tuteure', [require('angular-sqlite')]);
//import { sqlite3 } from 'sqlite3';
//var SQLite = require('sqlite3').verbose();
//var db = new SQLite.Database(':memory:');
@Injectable({
  providedIn: 'root'
})

export class BddserviceService {
  //SQLite=new sqlite3();
  test:string;
  test2:string;
  test3:boolean;
  test4:string;
  constructor() { 
    
  }
  creerBdd(){

  }
  creerUtilisateur(){
    
  }
  voirUtilisateur(){
  }

}
