import { NgModule } from '@angular/core';
import { BreadCrumbTest1Component } from './tests/test.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BreadcrumbsTestComponent } from 'src/components/documentation/breadcrumbs/breadcrumbs-test.component';
import { RouterModule } from '@angular/router';
import { BreadcrumbsRoutingModule } from 'src/components/documentation/breadcrumbs/breadcrumbs-routing.module';
import { JunteUiModule } from 'junte-ui';
import { PrismModule } from '@ngx-prism/core';
import { BreadcrumbResolver } from './resolver';
import { BreadCrumbTest2Component } from './tests/test2.component';


@NgModule({
  declarations: [
    BreadcrumbsTestComponent,
    BreadCrumbTest1Component,
    BreadCrumbTest2Component
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    JunteUiModule,
    PrismModule,
    BreadcrumbsRoutingModule
  ],
  exports: [
    BreadcrumbsTestComponent,
    BreadCrumbTest1Component,
    BreadCrumbTest2Component
  ],
  providers: [
    BreadcrumbResolver
  ]
})
export class BreadcrumbsModule {
}
