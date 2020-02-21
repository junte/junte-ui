import { ModuleWithProviders, NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { I18nLoaderFactory, JunteUIModuleConfig } from '../../config';
import { en } from '../../i18n/en';
import { AccordionModule } from './accordion/accordion.module';
import { GanttModule } from './gantt/gantt.module';
import { TableModule } from './table/table.module';

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
        {
          provide: JunteUIModuleConfig,
          useValue: config
        },
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: I18nLoaderFactory,
            deps: [JunteUIModuleConfig]
          },
          defaultLanguage: 'en'
        }).providers
      ]
    };
  }

}
