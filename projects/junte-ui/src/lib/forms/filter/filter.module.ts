import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconModule } from '../../elements/icon/icon.module';
import { StackModule } from '../../layout/stack/stack.module';
import { ButtonModule } from '../button/button.module';
import { FilterComponent } from './filter.component';

@NgModule({
  declarations: [
    FilterComponent
  ],
  imports: [
    CommonModule,
    IconModule,
    StackModule,
    ButtonModule
  ],
  entryComponents: [
    FilterComponent
  ],
  exports: [
    FilterComponent
  ]
})
export class FilterModule {
}
