import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { JunteUiModule } from 'junte-ui';

import { PipesTestComponent } from './pipes-test.component';

@NgModule({
  imports: [
    CommonModule,
    JunteUiModule
  ],
  exports: [PipesTestComponent],
  declarations: [PipesTestComponent],
})
export class PipesTestModule {
}
