import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IsEqualModule } from '../../pipes/is-equal.module';
import { BadgeModule } from '../badge/badge.module';
import { DotModule } from '../dot/dot.module';
import { StackModule } from '../stack/stack.module';
import { SwitcherOptionComponent } from './option/switcher-option.component';
import { SwitcherComponent } from './switcher.component';

@NgModule({
  imports: [
    CommonModule,
    BadgeModule,
    DotModule,
    StackModule,
    IsEqualModule
  ],
  declarations: [
    SwitcherComponent,
    SwitcherOptionComponent
  ],
  exports: [
    SwitcherComponent,
    SwitcherOptionComponent
  ]
})
export class SwitcherModule {
}
