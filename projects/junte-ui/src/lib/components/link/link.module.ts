import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LinkComponent } from './link.component';
import { IconModule } from '../icon/icon.module';
import { BadgeModule } from '../badge/badge.module';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    IconModule,
    BadgeModule
  ],
  exports: [
    LinkComponent
  ],
  declarations: [
    LinkComponent
  ]
})
export class LinkModule {
}
