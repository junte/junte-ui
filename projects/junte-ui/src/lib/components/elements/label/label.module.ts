import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorPipeModule } from '../../../pipes/color-pipe.module';
import { StackModule } from '../../layout/stack/stack.module';
import { LabelComponent } from './label.component';
import { IconModule } from '../icon/icon.module';

@NgModule({
  imports: [
    CommonModule,
    IconModule,
    StackModule,
    ColorPipeModule
  ],
  exports: [
    LabelComponent
  ],
  entryComponents: [
    LabelComponent
  ],
  declarations: [
    LabelComponent
  ]
})
export class LabelModule {
}
