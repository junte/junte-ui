import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StackModule } from '../../layout/stack/stack.module';
import { BadgeModule } from '../../ui-elements/badge/badge.module';
import { IconModule } from '../../ui-elements/icon/icon.module';
import { LinkComponent } from './link.component';


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
