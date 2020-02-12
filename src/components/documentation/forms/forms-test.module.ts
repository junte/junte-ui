import { NgModule } from '@angular/core';
import { FormsRoutingModule } from './forms-routing.module';
import { SwitcherTestModule } from './switcher/switcher-test.module';
import { SwitchTestModule } from './switch/switch-test.module';
import { SelectTestModule } from './select/select-test.module';
import { RadioTestModule } from './radio/radio-test.module';
import { InputTestModule } from './input/input-test.module';
import { FormTestModule } from './form/form-test.module';
import { DatePickerTestModule } from './date-picker/date-picker-test.module';
import { CheckboxTestModule } from './checkbox/checkbox-test.module';
import { CalendarTestModule } from './calendar/calendar-test.module';
import { ButtonTestModule } from './button/button-test.module';

@NgModule({
  imports: [
    FormsRoutingModule
  ],
  exports: [
    ButtonTestModule,
    CalendarTestModule,
    CheckboxTestModule,
    DatePickerTestModule,
    FormTestModule,
    InputTestModule,
    RadioTestModule,
    SelectTestModule,
    SwitchTestModule,
    SwitcherTestModule
  ]
})
export class FormsTestModule {
}
