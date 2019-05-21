import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableComponent } from './table.component';
import { TableColumnComponent } from './column/table-column.component';
import { DatePipeModule } from '../../pipes/date-pipe.module';
import { IconModule } from '../icon/icon.module';
import { PaginationModule } from '../pagination/pagination.module';
import { SpinnerModule } from '../spinner/spinner.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DatePipeModule,
    IconModule,
    PaginationModule,
    SpinnerModule
  ],
  declarations: [
    TableComponent,
    TableColumnComponent
  ],
  exports: [
    TableComponent,
    TableColumnComponent
  ]
})
export class TableModule {
}
