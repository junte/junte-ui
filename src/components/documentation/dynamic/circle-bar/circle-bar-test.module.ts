import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { PrismModule } from '@ngx-prism/core';
import { JunteUiModule } from 'junte-ui';
import { SharedModule } from 'src/components/documentation/shared/shared.module';

import { CircleBarTestComponent } from './circle-bar-test.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    JunteUiModule,
    SharedModule,
    PrismModule
  ],
  exports: [CircleBarTestComponent],
  declarations: [CircleBarTestComponent],
})
export class CircleBarTestModule {
}

