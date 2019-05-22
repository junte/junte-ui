import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableComponent } from './table.component';
import { TableColumnComponent } from './column/table-column.component';
import { DatePipeModule } from '../../pipes/date-pipe.module';
import { IconModule } from '../icon';
import { PaginationModule } from '../pagination';
import { SpinnerModule } from '../spinner';
import { StackModule } from '../stack';
import { SkeletonModule } from '../skeleton';
import { InputModule } from '../input';
import { ButtonModule } from '../button';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DatePipeModule,
    IconModule,
    InputModule,
    PaginationModule,
    ButtonModule,
    SpinnerModule,
    StackModule,
    SkeletonModule
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
