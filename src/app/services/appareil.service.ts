import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { app } from '../appareil/appareil';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AppareilService {
  https: HttpClient;
  constructor(http: HttpClient) {
    this.https = http;
  }
  URL: string = '../bd/appareil.json';
  public appareils = [
    {
      nom: 'tele',
      status: 'allumé',
    },
    {
      nom: 'ordi',
      status: 'allumé',
    },
    {
      nom: 'fourr',
      status: 'allumé',
    },
  ];

  AllumTout() {
    for (let app of this.appareils) {
      app.status = 'allumé';
    }
  }

  EteintTout() {
    for (let app of this.appareils) {
      app.status = 'éteint';
    }
  }

  AlUnique(index: number) {
    this.appareils[index].status = 'allumé';
  }

  EtUnique(index: number) {
    this.appareils[index].status = 'éteint';
  }

  getappareil(): Observable<app[]> {
    console.log('lecture Ok');
    return this.https.get<app[]>(this.URL);
  }
}
