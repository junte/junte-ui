import { NgModule } from '@angular/core';
import { ButtonModule } from './button/button.module';
import { CalendarModule } from './calendar/calendar.module';
import { CheckboxModule } from './checkbox/checkbox.module';
import { DatePickerModule } from './date-picker/date-picker.module';
import { FilterModule } from './filter/filter.module';
import { FormModule } from './form/form.module';
import { ImageCropperModule } from './image-cropper/image-cropper.module';
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
    FilterModule,
    ImageCropperModule
  ]
})
export class UiFormsModule {
}
