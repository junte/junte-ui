import { NgModule } from '@angular/core';
import { BreadcrumbsModule } from './breadcrumbs/breadcrumbs.module';
import { DropdownModule } from './dropdown/dropdown.module';
import { LinkModule } from './link/link.module';
import { MenuModule } from './menu/menu.module';
import { PaginationModule } from './pagination/pagination.module';
import { TabsModule } from './tabs/tabs.module';

@NgModule({
  exports: [
    BreadcrumbsModule,
    DropdownModule,
    LinkModule,
    MenuModule,
    PaginationModule,
    TabsModule
  ]
})
export class NavigationModule {
}
