import { CommonModule } from '@angular/common';
import {ModuleWithProviders, NgModule} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DateFnsModule } from 'ngx-date-fns';
import { BlockModule } from '../../layout/block/block.module';
import { PopoverModule } from '../../overlays/popover/popover.module';
import { CalendarModule } from '../calendar/calendar.module';
import { FormModule } from '../form/form.module';
import { InputModule } from '../input/input.module';
import { DatePickerComponent } from './date-picker.component';
import {JunteUIModuleConfig} from '../../../config';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {I18nLoader} from '../../../i18n/loader';
import {en} from '../../../i18n/en';


@NgModule({
  declarations: [
    DatePickerComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormModule,
    DateFnsModule,
    InputModule,
    CalendarModule,
    BlockModule,
    PopoverModule
  ],
  entryComponents: [
    DatePickerComponent
  ],
  exports: [
    DatePickerComponent
  ]
})
export class DatePickerModule {

  static forRoot(config: JunteUIModuleConfig = {}): ModuleWithProviders<DatePickerModule> {
    return {
      ngModule: DatePickerModule,
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
