import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ColorPipesModule } from '../../core/pipes/color-pipes.module';
import { StackModule } from '../../layout/stack/stack.module';
import { DotModule } from '../dot/dot.module';
import { IconModule } from '../icon/icon.module';
import { LabelComponent } from './label.component';

@NgModule({
  imports: [
    CommonModule,
    IconModule,
    StackModule,
    ColorPipesModule,
    DotModule
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
