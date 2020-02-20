import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { PrismModule } from '@ngx-prism/core';
import { JunteUiModule } from 'junte-ui';
import { TableDataComponent } from './data/table-data.component';
import { SharedModule } from '../../shared/shared.module';

import { TableTestComponent } from './table-test.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    JunteUiModule,
    SharedModule,
    PrismModule
  ],
  exports: [TableTestComponent, TableDataComponent],
  declarations: [
    TableTestComponent,
    TableDataComponent
  ],
})
export class TableTestModule {
}

