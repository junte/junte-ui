import { NgModule } from '@angular/core';
import { AccordionTestModule } from './accordion/accordion-test.module';
import { NavigationRoutingModule } from './navigation-routing.module';
import { TabsTestModule } from './tabs/tabs-test.module';
import { PagerTestModule } from './pager/pager-test.module';
import { MenuTestModule } from './menu/menu-test.module';
import { LinkTestModule } from './link/link-test.module';
import { BreadcrumbsTestModule } from './breadcrumbs/breadcrumbs-test.module';
import { AnchorTestModule } from './anchor/anchor-test.module';

@NgModule({
  imports: [
    NavigationRoutingModule
  ],
  exports: [
    AnchorTestModule,
    BreadcrumbsTestModule,
    LinkTestModule,
    MenuTestModule,
    PagerTestModule,
    TabsTestModule,
    AccordionTestModule
  ]
})
export class NavigationTestModule {

}
