import { ModuleWithProviders, NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { I18nLoaderFactory, JunteUIModuleConfig } from '../../config';
import { en } from '../../i18n/en';
import { AnchorModule } from './anchor/anchor.module';
import { BreadcrumbsModule } from './breadcrumbs/breadcrumbs.module';
import { DropdownModule } from './dropdown/dropdown.module';
import { LinkModule } from './link/link.module';
import { MenuModule } from './menu/menu.module';
import { PaginationModule } from './pagination/pagination.module';
import { TabsModule } from './tabs/tabs.module';

@NgModule({
  exports: [
    LinkModule,
    AnchorModule,
    BreadcrumbsModule,
    DropdownModule,
    MenuModule,
    PaginationModule,
    TabsModule
  ]
})
export class NavigationModule {

  static forRoot(config: JunteUIModuleConfig = {}): ModuleWithProviders<NavigationModule> {
    return {
      ngModule: NavigationModule,
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
