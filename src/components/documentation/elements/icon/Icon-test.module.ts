import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { JunteUiModule } from 'projects/junte-ui/src/lib/junte-ui.module';
import { SharedModule } from 'src/components/documentation/shared/shared.module';

import { IconTestComponent } from './icon-test.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    JunteUiModule,
    SharedModule
  ],
  exports: [IconTestComponent],
  declarations: [IconTestComponent],
})
export class IconTestModule {
}

