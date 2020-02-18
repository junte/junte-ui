import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StackModule } from '../../layout/stack/stack.module';
import { RadioComponent } from './radio.component';
import { RadioGroupComponent } from './radio-group/radio-group.component';

@NgModule({
  imports: [
    CommonModule,
    StackModule
  ],
  exports: [
    RadioComponent,
    RadioGroupComponent
  ],
  declarations: [
    RadioComponent,
    RadioGroupComponent
  ],
  entryComponents: [
    RadioComponent
  ]
})
export class RadioModule {
}
