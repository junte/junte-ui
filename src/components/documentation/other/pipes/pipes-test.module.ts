import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { JunteUiModule } from 'projects/junte-ui/src/lib/junte-ui.module';

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
