import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LinkComponent } from './link.component';
import { IconModule } from '../icon/icon.module';
import { BadgeModule } from '../badge/badge.module';
import {StackModule} from '../stack/stack.module';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    IconModule,
    BadgeModule,
    StackModule
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
