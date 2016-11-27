import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent }  from './app.component';
import { HeroDetalleComponent } from './hero-detalle.component';
import { HeroesComponent } from './heroes.component';
import { HeroServicio } from './hero.servicio';
import { DashboardComponent } from './dashboard.component';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
   ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetalleComponent,
    HeroesComponent
  ],
  providers:[
    HeroServicio
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
