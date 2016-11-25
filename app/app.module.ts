import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent }  from './app.component';
import { HeroDetalleComponent } from './hero-detalle.component';
import { HeroesComponent } from './heroes.component';
import { HeroServicio } from './hero.servicio';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path:'heroes',
       component:HeroesComponent
      }
    ])
   ],
  declarations: [
    AppComponent
    HeroDetalleComponent,
    HeroesComponent
  ],
  providers:[
    HeroServicio
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
