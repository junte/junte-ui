import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DateFnsModule } from 'ngx-date-fns';
import { JUNTE_MODULE_PROVIDES, JunteUIModuleConfig } from '../../config';
import { ArrayPipesModule } from '../../core/pipes/array-pipes.module';
import { BlockModule } from '../../layout/block/block.module';
import { ResponsiveModule } from '../../layout/responsive/responsive.module';
import { StackModule } from '../../layout/stack/stack.module';
import { PopoverModule } from '../../overlays/popover/popover.module';
import { CalendarModule } from '../calendar/calendar.module';
import { FormModule } from '../form/form.module';
import { InputModule } from '../input/input.module';
import { DatePickerComponent } from './date-picker.component';
import { StyleLeftPipe, StyleTopPipe, TimeFormatPipe } from './date-picker.pipes';


@NgModule({
  declarations: [
    DatePickerComponent,
    StyleTopPipe,
    StyleLeftPipe,
    TimeFormatPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormModule,
    DateFnsModule,
    InputModule,
    CalendarModule,
    BlockModule,
    PopoverModule,
    ResponsiveModule,
    StackModule,
    PopoverModule,
    ArrayPipesModule
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
        {
          provide: JunteUIModuleConfig,
          useValue: config
        }, ...JUNTE_MODULE_PROVIDES
      ]
    };
  }

}
