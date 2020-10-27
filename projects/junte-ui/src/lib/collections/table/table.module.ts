import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ArrayPipesModule } from '../../core/pipes/array-pipes.module';
import { IconModule } from '../../elements/icon/icon.module';
import { ButtonModule } from '../../forms/button/button.module';
import { InputModule } from '../../forms/input/input.module';
import { SelectModule } from '../../forms/select/select.module';
import { SkeletonModule } from '../../layout/skeleton/skeleton.module';
import { SpinnerModule } from '../../layout/spinner/spinner.module';
import { StackModule } from '../../layout/stack/stack.module';
import { PagerModule } from '../../navigation/pager/pager.module';
import { PopoverModule } from '../../overlays/popover/popover.module';
import { TableColumnComponent } from './table-column';
import { TableComponent } from './table.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IconModule,
    InputModule,
    PagerModule,
    ButtonModule,
    SpinnerModule,
    StackModule,
    SkeletonModule,
    ArrayPipesModule,
    SelectModule,
    TranslateModule,
    PopoverModule
  ],
  declarations: [
    TableComponent,
    TableColumnComponent
  ],
  entryComponents: [
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
