import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TimerComponent } from './timer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    TimerComponent
  ],
  entryComponents: [
    TimerComponent
  ],
  declarations: [
    TimerComponent
  ]
})
export class TimerModule {
}
