import { Component, OnInit } from '@angular/core';
import { HeroesComponent} from './heroes.component';

@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
  <my-heroes></my-heroes>
  `
})
export class AppComponent implements OnInit {
  title='WowHeroes';
  ngOnInit(){}
}
