import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconModule } from '../../elements/icon/icon.module';
import { SpinnerModule } from '../../layout/spinner/spinner.module';
import { StackModule } from '../../layout/stack/stack.module';
import { AccordionComponent } from './accordion.component';
import { AccordionSectionDirective } from './section/accordion-section.directive';

@NgModule({
  imports: [
    CommonModule,
    IconModule,
    StackModule,
    SpinnerModule
  ],
  declarations: [
    AccordionComponent,
    AccordionSectionDirective
  ],
  exports: [
    AccordionComponent,
    AccordionSectionDirective
  ]
})
export class AccordionModule {
}
