import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { PomodoroTimer }  from './pomodoro-timer.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
   ],
  declarations: [
    PomodoroTimer
  ],
  bootstrap: [ PomodoroTimer ]
})
export class AppModule { }
