import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ColorPipeModule } from '../../../pipes/color-pipe.module';
import { BadgeComponent } from './badge.component';

@NgModule({
  imports: [
    CommonModule,
    ColorPipeModule
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
