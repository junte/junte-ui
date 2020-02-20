import { ModuleWithProviders, NgModule } from '@angular/core';
import { AnchorModule } from './anchor/anchor.module';
import { BreadcrumbsModule } from './breadcrumbs/breadcrumbs.module';
import { DropdownModule } from './dropdown/dropdown.module';
import { LinkModule } from './link/link.module';
import { MenuModule } from './menu/menu.module';
import { PaginationModule } from './pagination/pagination.module';
import { TabsModule } from './tabs/tabs.module';
import { JunteUIModuleConfig } from '../../config';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { I18nLoader } from '../../i18n/loader';
import { en } from '../../i18n/en';

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
