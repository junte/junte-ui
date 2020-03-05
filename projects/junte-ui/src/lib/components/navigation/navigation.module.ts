import { ModuleWithProviders, NgModule } from '@angular/core';
import { JUNTE_MODULE_PROVIDES, JunteUIModuleConfig } from '../../config';
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
        }, ...JUNTE_MODULE_PROVIDES
      ]
    };
  }

}
