import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppLayoutModule, GridModule } from 'junte-ui';
import { SectionModule } from '../shared/section/section.module';
import { AccordionTestModule } from './accordion/accordion-test.module';
import { BreadcrumbsTestModule } from './breadcrumbs/breadcrumbs-test.module';
import { LinkTestModule } from './link/link-test.module';
import { MenuTestModule } from './menu/menu-test.module';
import { NavigationRoutingModule } from './navigation-routing.module';
import { NavigationTestComponent } from './navigation-test.component';
import { PagerTestModule } from './pager/pager-test.module';
import { TabsTestModule } from './tabs/tabs-test.module';

@NgModule({
  declarations: [
    NavigationTestComponent
  ],
  imports: [
    CommonModule,
    NavigationRoutingModule,
    SectionModule,
    GridModule,
    AppLayoutModule
  ],
  exports: [
    BreadcrumbsTestModule,
    LinkTestModule,
    MenuTestModule,
    PagerTestModule,
    TabsTestModule,
    AccordionTestModule,
    NavigationTestComponent
  ]
})
export class NavigationTestModule {

}
