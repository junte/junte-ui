import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrismModule } from '@ngx-prism/core';
import { JunteUiModule } from 'junte-ui';
import { SharedModule } from 'src/components/documentation/shared/shared.module';

import { RadioTestComponent } from './radio-test.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    JunteUiModule,
    SharedModule,
    PrismModule
  ],
  exports: [RadioTestComponent],
  declarations: [RadioTestComponent]
})
export class RadioTestModule {
}
