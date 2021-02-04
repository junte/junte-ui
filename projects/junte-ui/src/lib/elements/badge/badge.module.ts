import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ArrayPipesModule } from '../../core/pipes/array-pipes.module';
import { ColorPipesModule } from '../../core/pipes/color-pipes.module';
import { BadgeComponent } from './badge.component';

@NgModule({
  imports: [
    CommonModule,
    ColorPipesModule,
    ArrayPipesModule
  ],
  declarations: [
    BadgeComponent
  ],
  entryComponents: [
    BadgeComponent
  ],
  exports: [
    BadgeComponent
  ]
})
export class BadgeModule {
}
