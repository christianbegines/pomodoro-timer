import { Component ,OnInit} from '@angular/core';
import { Hero } from './hero';
import { HeroServicio } from './hero.servicio';
import { Router } from '@angular/router';

@Component({
  moduleId:module.id,
  selector: 'my-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: [ 'heroes.component.css']
})

export class HeroesComponent implements OnInit {
  heroes:Hero[];
  selectedHero:Hero;
  constructor(
    private heroServicio: HeroServicio,
    private router: Router
  ){}

  getHeroes():void{
    this.heroServicio.getHeroes().then(
      heroes=> this.heroes=heroes
    );
  }

  ngOnInit():void{
    this.getHeroes();
  }

  onSelect(hero:Hero):void{
    this.selectedHero=hero;
  }
  goToDetalle():void{
    this.router.navigate(['/detalle',this.selectedHero.id]);
  }

 }
