import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { JUNTE_MODULE_PROVIDES, JunteUIModuleConfig } from '../../config';
import { IconModule } from '../../elements/icon/icon.module';
import { AccordionComponent } from './accordion.component';
import { AccordionSectionComponent } from './section/accordion-section.component';

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

  static forRoot(config: JunteUIModuleConfig = {}): ModuleWithProviders<AccordionModule> {
    return {
      ngModule: AccordionModule,
      providers: [
        {
          provide: JunteUIModuleConfig,
          useValue: config
        }, ...JUNTE_MODULE_PROVIDES
      ]
    };
  }

}
