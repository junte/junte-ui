import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { JUNTE_MODULE_PROVIDES, JunteUIModuleConfig } from '../../config';
import { ArrayPipesModule } from '../../core/pipes/array-pipes.module';
import { IconModule } from '../../elements/icon/icon.module';
import { ButtonModule } from '../../forms/button/button.module';
import { InputModule } from '../../forms/input/input.module';
import { SelectModule } from '../../forms/select/select.module';
import { SkeletonModule } from '../../layout/skeleton/skeleton.module';
import { SpinnerModule } from '../../layout/spinner/spinner.module';
import { StackModule } from '../../layout/stack/stack.module';
import { DropdownModule } from '../../navigation/dropdown/dropdown.module';
import { PagerModule } from '../../navigation/pager/pager.module';
import { TableColumnComponent } from './column/table-column.component';
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
    DropdownModule,
    ArrayPipesModule,
    SelectModule,
    TranslateModule
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

  static forRoot(config: JunteUIModuleConfig = {}): ModuleWithProviders<TableModule> {
    return {
      ngModule: TableModule,
      providers: [
        {
          provide: JunteUIModuleConfig,
          useValue: config
        }, ...JUNTE_MODULE_PROVIDES
      ]
    };
  }

}
