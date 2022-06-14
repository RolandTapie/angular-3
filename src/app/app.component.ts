import { Component, VERSION, OnInit } from '@angular/core';
import { AppareilComponent } from './appareil/appareil.component';
import { AppareilService } from './services/appareil.service';
import { app } from './appareil/appareil';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  maj = new Date();
  appareils: any[];
  listapp: app[];
  prom = new Promise((resolve, rejected) => {
    const date = new Date();
    setTimeout(() => {
      resolve(date);
    }, 2000);
  });
  name = 'Angular ' + VERSION.major;
  tps: boolean = false;

  constructor(private appareilService: AppareilService) {
    setTimeout(() => {
      this.tps = true;
    }, 4000);
  }

  ngOnInit() {
    this.appareils = this.appareilService.appareils;
    const Obs = this.appareilService
      .getappareil()
      .subscribe((a) => (this.listapp = a));

      console.log(this.listapp);
  }

  Al() {
    this.appareilService.AllumTout();
  }

  Et() {
    this.appareilService.EteintTout();
  }
}
