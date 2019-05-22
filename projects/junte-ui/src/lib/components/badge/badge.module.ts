import { NgModule } from '@angular/core';
import { BadgeComponent } from './badge.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BadgeComponent
  ],
  exports: [
    BadgeComponent
  ]
})
export class BadgeModule {
}
