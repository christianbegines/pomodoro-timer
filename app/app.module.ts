import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HeroDetalleComponent } from './hero-detalle.component';

import { AppComponent }  from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
   ],
  declarations: [
    AppComponent
    HeroDetalleComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
