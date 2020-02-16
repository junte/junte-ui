import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorPipesModule } from '../../../pipes/color-pipes.module';
import { StackModule } from '../../layout/stack/stack.module';
import { LabelComponent } from './label.component';
import { IconModule } from '../icon/icon.module';

@NgModule({
  imports: [
    CommonModule,
    IconModule,
    StackModule,
    ColorPipesModule
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
