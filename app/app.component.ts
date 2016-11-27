import { Component, OnInit } from '@angular/core';
import { HeroesComponent} from './heroes.component';

@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
  <nav>
    <a class="menu-principal" routerLink="/dashboard">DashBoard</a>
    <a class="menu-principal" routerLink="/heroes">Heroes</a>
  </nav>
  <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {
  title='WowHeroes';
  ngOnInit(){}
}
