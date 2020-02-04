import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './accordion.component';
import { AccordionSectionComponent } from './section/accordion-section.component';
import { IconModule } from '../../elements/icon/icon.module';

@NgModule({
  imports: [
    CommonModule,
    IconModule
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
