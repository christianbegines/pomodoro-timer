import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroServicio } from './hero.servicio';

@Component({
  moduleId:module.id,
  selector: 'my-dashboard',
  templateUrl:'dashboard.component.html'
})

export class DashboardComponent implements OnInit {

  heroes:Hero[] = [];
  constructor(private heroServicio:HeroServicio){}
  ngOnInit():void {
    this.heroServicio.getHeroes().then(
      heroes => this.heroes=heroes.slice(1,5)
    );
  }
}
