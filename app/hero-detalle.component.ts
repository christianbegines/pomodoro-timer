import { Component, Input } from '@angular/core';
import { Hero } from './hero';
import { HeroServicio } from './hero.servicio';
import { Location } from '@angular/common';
import { ActivatedRoute,Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  moduleId:module.id,
  selector: 'my-hero-detalle',
  templateUrl: 'hero-detalle.component.html'
})

export class HeroDetalleComponent {
  @Input()
  hero: Hero;
  constructor(
    private heroServicio:HeroServicio,
    private route:ActivatedRoute,
    private location:Location
  ){}
  ngOnInit():void{
    this.route.params
      .switchMap((params:Params) => this.heroServicio.getHero(+params['id']))
      .subscribe(hero => this.hero=hero);
  }
  goBack():void{
    this.location.back();
  }
}
