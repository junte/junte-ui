import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectModule } from '../../forms/select/select.module';
import { ArrayPipeModule } from '../../../pipes/array-pipe.module';
import { TableComponent } from './table.component';
import { TableColumnComponent } from './column/table-column.component';
import { DatePipeModule } from '../../../pipes/date-pipe.module';
import { IconModule } from '../../elements/icon/icon.module';
import { PaginationModule } from '../../navigation/pagination/pagination.module';
import { SpinnerModule } from '../../layout/spinner/spinner.module';
import { StackModule } from '../../layout/stack/stack.module';
import { SkeletonModule } from '../../layout/skeleton/skeleton.module';
import { InputModule } from '../../forms/input/input.module';
import { ButtonModule } from '../../forms/button/button.module';
import { DropdownModule } from '../../navigation/dropdown/dropdown.module';
import { JunteUIModuleConfig } from '../../../config';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { I18nLoader } from '../../../i18n/loader';
import { en } from '../../../i18n/en';

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
    SkeletonModule,
    DropdownModule,
    ArrayPipeModule,
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
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useValue: new I18nLoader(config.i18n || en)
          },
          defaultLanguage: 'en'
        }).providers]
    };
  }

}
