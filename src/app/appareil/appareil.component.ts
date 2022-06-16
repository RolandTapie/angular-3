import { Component, OnInit, Input } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css'],
})
export class AppareilComponent implements OnInit {
  constructor(private appareilService: AppareilService) {}

  @Input()
  name: string = 'televiseur';
  @Input()
  status: string = 'éteint';
  @Input()
  indexOfAppareil: number;

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

  btn: boolean = false;
  ngOnInit() {}

  getStatus() {
    return this.status;
  }

  getColor(): string {
    if (this.status == 'allumé') {
      return 'green';
    } else {
      return 'red';
    }
  }
  changeStatus() {
    if (this.status == 'éteint') {
      this.status = 'allumé';
    } else {
      this.status = 'éteint';
    }
  }
  alAppareil() {
    this.appareilService.AlUnique(this.indexOfAppareil);
  }
  etAppareil() {
    this.appareilService.EtUnique(this.indexOfAppareil);
  }
}
