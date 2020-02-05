import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { JunteUiModule } from 'projects/junte-ui/src/lib/junte-ui.module';

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
