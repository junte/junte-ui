import { ModuleWithProviders, NgModule } from '@angular/core';
import { GanttModule } from './gantt/gantt.module';
import { TableModule } from './table/table.module';
import { AccordionModule } from './accordion/accordion.module';
import { JunteUIModuleConfig } from '../../config';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { I18nLoader } from '../../i18n/loader';
import { en } from '../../i18n/en';

@NgModule({
  exports: [
    GanttModule,
    TableModule,
    AccordionModule,
  ]
})
export class CollectionsModule {

  static forRoot(config: JunteUIModuleConfig = {}): ModuleWithProviders<CollectionsModule> {
    return {
      ngModule: CollectionsModule,
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
