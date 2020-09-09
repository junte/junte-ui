import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BadgeModule } from '../../elements/badge/badge.module';
import { IconModule } from '../../elements/icon/icon.module';
import { StackModule } from '../../layout/stack/stack.module';
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
  entryComponents: [
    LinkComponent
  ],
  declarations: [
    LinkComponent
  ]
})
export class LinkModule {
}
