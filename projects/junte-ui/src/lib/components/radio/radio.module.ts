import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioComponent } from './radio.component';
import { RadioGroupComponent } from './radio-group/radio-group.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    RadioComponent,
    RadioGroupComponent
  ],
  declarations: [
    RadioComponent,
    RadioGroupComponent
  ]
})
export class RadioModule {
}
