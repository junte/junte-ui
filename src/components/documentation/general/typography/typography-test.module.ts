import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { JunteUiModule } from 'junte-ui';

import { TypographyTestComponent } from './typography-test.component';

@NgModule({
  imports: [
    CommonModule,
    JunteUiModule
  ],
  exports: [TypographyTestComponent],
  declarations: [TypographyTestComponent],
})
export class TypographyTestModule {
}
