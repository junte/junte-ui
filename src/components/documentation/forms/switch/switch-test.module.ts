import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { JunteUiModule } from 'projects/junte-ui/src/lib/junte-ui.module';
import { SharedModule } from 'src/components/documentation/shared/shared.module';

import { SwitchTestComponent } from './switch-test.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    JunteUiModule,
    SharedModule
  ],
  exports: [SwitchTestComponent],
  declarations: [SwitchTestComponent],
})
export class SwitchTestModule {
}