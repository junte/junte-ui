import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './accordion.component';
import { AccordionSectionComponent } from './section/accordion-section.component';
import { IconModule } from '../../elements/icon/icon.module';
import { JunteUIModuleConfig } from '../../../config';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { I18nLoader } from '../../../i18n/loader';
import { en } from '../../../i18n/en';

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
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useValue: new I18nLoader(config.i18n || en)
          },
          defaultLanguage: 'en'
        }).providers]
    };
  }

}
