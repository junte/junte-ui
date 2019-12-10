import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StackModule } from '../../layout/stack/stack.module';
import { IconModule } from '../../ui-elements/icon/icon.module';
import { BreadcrumbsComponent } from './breadcrumbs.component';

@NgModule({
  imports: [
    CommonModule,
    IconModule,
    StackModule
  ],
  declarations: [
    BreadcrumbsComponent
  ],
  exports: [
    BreadcrumbsComponent
  ]
})
export class BreadcrumbsModule {
}
