import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { JunteUiModule } from 'projects/junte-ui/src/lib/junte-ui.module';
import { SharedModule } from '../../shared/shared.module';

import { AccordionTestComponent } from './accordion-test.component';

@NgModule({
  imports: [
    CommonModule,
    JunteUiModule,
    SharedModule
  ],
  exports: [AccordionTestComponent],
  declarations: [AccordionTestComponent],
})
export class AccordionTestModule {
}
