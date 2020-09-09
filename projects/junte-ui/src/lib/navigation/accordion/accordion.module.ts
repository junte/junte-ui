import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconModule } from '../../elements/icon/icon.module';
import { SpinnerModule } from '../../layout/spinner/spinner.module';
import { StackModule } from '../../layout/stack/stack.module';
import { AccordionComponent } from './accordion.component';
import { AccordionSectionComponent } from './section/accordion-section.component';

@NgModule({
  imports: [
    CommonModule,
    IconModule,
    StackModule,
    SpinnerModule
  ],
  declarations: [
    AccordionComponent,
    AccordionSectionComponent
  ],
  entryComponents: [
    AccordionSectionComponent
  ],
  exports: [
    AccordionComponent,
    AccordionSectionComponent
  ]
})
export class AccordionModule {
}
