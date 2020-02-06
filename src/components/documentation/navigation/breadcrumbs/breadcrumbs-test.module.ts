import { NgModule } from '@angular/core';
import { BreadCrumbTest1Component } from 'src/components/documentation/navigation/breadcrumbs/tests/test.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BreadcrumbsTestComponent } from 'src/components/documentation/navigation/breadcrumbs/breadcrumbs-test.component';
import { RouterModule } from '@angular/router';
import { BreadcrumbsRoutingModule } from 'src/components/documentation/navigation/breadcrumbs/breadcrumbs-routing.module';
import { JunteUiModule } from 'junte-ui';
import { PrismModule } from '@ngx-prism/core';
import { BreadcrumbResolver } from 'src/components/documentation/navigation/breadcrumbs/resolver';
import { BreadCrumbTest2Component } from 'src/components/documentation/navigation/breadcrumbs/tests/test2.component';
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
    JunteUiModule,
    PrismModule,
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
