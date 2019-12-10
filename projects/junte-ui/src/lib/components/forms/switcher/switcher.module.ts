import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IsEqualModule } from '../../../pipes/is-equal.module';
import { StackModule } from '../../layout/stack/stack.module';
import { BadgeModule } from '../../ui-elements/badge/badge.module';
import { IconModule } from '../../ui-elements/icon/icon.module';
import { DotModule } from '../dot/dot.module';
import { SwitcherOptionComponent } from './option/switcher-option.component';
import { SwitcherComponent } from './switcher.component';

@NgModule({
  imports: [
    CommonModule,
    BadgeModule,
    DotModule,
    StackModule,
    IsEqualModule,
    IconModule
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
