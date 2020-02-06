import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { PrismModule } from '@ngx-prism/core';
import { JunteUiModule } from 'junte-ui';
import { SharedModule } from 'src/components/documentation/shared/shared.module';

import { ProgressBarTestComponent } from './progress-bar-test.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    JunteUiModule,
    SharedModule,
    PrismModule
  ],
  exports: [ProgressBarTestComponent],
  declarations: [ProgressBarTestComponent],
})
export class ProgressBarTestModule {
}

