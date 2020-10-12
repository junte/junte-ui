import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
    AccordionModule,
    AppLayoutModule,
    BreadcrumbsModule,
    FormModule,
    GridModule,
    IconModule,
    LinkModule,
    StackModule,
    TabsModule
} from 'junte-ui';
import { ResourcesModule } from 'src/components/docs/shared/resources/resources.module';
import { JUNTE_UI_CONFIG } from 'src/consts';
import { BrowserPreviewModule } from '../../shared/browser-preview/browser-preview.module';
import { CodeHighlightModule } from '../../shared/code-highlight/code-highlight.module';
import { HowToUseModule } from '../../shared/how-to-use/how-to-use.module';
import { BreadcrumbsRoutingModule } from './breadcrumbs-routing.module';
import { BreadcrumbsTestComponent } from './breadcrumbs-test.component';
import { BreadcrumbResolver } from './resolver';
import { BreadCrumbTest1Component } from './tests/test.component';
import { BreadCrumbTest2Component } from './tests/test2.component';
import { BreadCrumbTest3Component } from './tests/test3.component';

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
        HowToUseModule,
        ResourcesModule,
        AppLayoutModule
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
