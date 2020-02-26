import { NgModule } from '@angular/core';
import { BreadCrumbTest1Component } from './tests/test.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BreadcrumbsTestComponent } from './breadcrumbs-test.component';
import { RouterModule } from '@angular/router';
import { BreadcrumbsRoutingModule } from './breadcrumbs-routing.module';
import { LinkModule, StackModule, TabsModule, GridModule, FormModule, AccordionModule, BreadcrumbsModule, IconModule } from 'junte-ui';
import { BreadcrumbResolver } from './resolver';
import { BreadCrumbTest2Component } from './tests/test2.component';
import { BrowserPreviewModule } from '../../shared/browser-preview/browser-preview.module';
import { BreadCrumbTest3Component } from './tests/test3.component';
import { CodeHighlightModule } from '../../shared/code-highlight/code-highlight.module';
import { HowToUseModule } from '../../shared/how-to-use/how-to-use.module';

@NgModule({
  declarations: [
    BreadcrumbsTestComponent,
    BreadCrumbTest1Component,
    BreadCrumbTest2Component,
    BreadCrumbTest3Component,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    LinkModule,
    StackModule,
    TabsModule,
    GridModule,
    FormModule,
    AccordionModule,
    BreadcrumbsModule,
    IconModule,
    BreadcrumbsRoutingModule,
    BrowserPreviewModule,
    CodeHighlightModule,
    HowToUseModule
  ],
  exports: [
    BreadcrumbsTestComponent,
    BreadCrumbTest1Component,
    BreadCrumbTest2Component,
    BreadCrumbTest3Component
  ],
  providers: [
    BreadcrumbResolver
  ]
})
export class BreadcrumbsTestModule {
}
