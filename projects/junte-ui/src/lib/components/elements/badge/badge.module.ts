import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BadgeComponent } from './badge.component';

@NgModule({
  imports: [
    CommonModule
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
