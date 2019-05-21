import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginationComponent } from './pagination.component';
import { PageSizeComponent } from './page-size/page-size.component';
import { IconModule } from '../icon/icon.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IconModule
  ],
  declarations: [
    PaginationComponent,
    PageSizeComponent
  ],
  exports: [
    PaginationComponent,
    PageSizeComponent
  ]
})
export class PaginationModule {
}
