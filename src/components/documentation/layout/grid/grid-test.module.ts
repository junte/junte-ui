import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { JunteUiModule } from 'projects/junte-ui/src/lib/junte-ui.module';
import { SharedModule } from 'src/components/documentation/shared/shared.module';

import { GridTestComponent } from './grid-test.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    JunteUiModule,
    SharedModule
  ],
  exports: [GridTestComponent],
  declarations: [GridTestComponent],
})
export class GridTestModule {
}
