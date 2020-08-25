import { ModuleWithProviders, NgModule } from '@angular/core';
import { FilterModule } from './filter/filter.module';
import { JUNTE_MODULE_PROVIDES, JunteUIModuleConfig } from '../config';
import { ButtonModule } from './button/button.module';
import { CalendarModule } from './calendar/calendar.module';
import { CheckboxModule } from './checkbox/checkbox.module';
import { DatePickerModule } from './date-picker/date-picker.module';
import { FormModule } from './form/form.module';
import { InputModule } from './input/input.module';
import { RadioModule } from './radio/radio.module';
import { SelectModule } from './select/select.module';
import { SwitchModule } from './switch/switch.module';
import { SwitcherModule } from './switcher/switcher.module';

@NgModule({
  exports: [
    ButtonModule,
    CalendarModule,
    CheckboxModule,
    DatePickerModule,
    FormModule,
    InputModule,
    RadioModule,
    SelectModule,
    SwitchModule,
    SwitcherModule,
    FilterModule
  ]
})
export class UiFormsModule {

  static forRoot(config: JunteUIModuleConfig = {}): ModuleWithProviders<UiFormsModule> {
    return {
      ngModule: UiFormsModule,
      providers: [
        {
          provide: JunteUIModuleConfig,
          useValue: config
        }, ...JUNTE_MODULE_PROVIDES
      ]
    };
  }

}
