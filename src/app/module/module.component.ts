import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.css'],
})
export class ModuleComponent implements OnInit {
  @Input()
  nom: string = 'vide';
  img: string ="img.png"
  constructor() {}

  ngOnInit() {}
}
