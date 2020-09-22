import { NgModule } from '@angular/core';
import { ImageUploaderTestModule } from 'src/components/docs/forms/image-uploader/image-uploader-test.module';
import { ButtonTestModule } from './button/button-test.module';
import { CalendarTestModule } from './calendar/calendar-test.module';
import { CheckboxTestModule } from './checkbox/checkbox-test.module';
import { DatePickerTestModule } from './date-picker/date-picker-test.module';
import { FilterTestModule } from './filter/filter-test.module';
import { FormTestModule } from './form/form-test.module';
import { FormsRoutingModule } from './forms-routing.module';
import { ImageCropperTestModule } from './image-cropper/image-cropper-test.module';
import { InputTestModule } from './input/input-test.module';
import { RadioTestModule } from './radio/radio-test.module';
import { SelectTestModule } from './select/select-test.module';
import { SelectableTestModule } from './selectable/selectable-test.module';
import { SwitchTestModule } from './switch/switch-test.module';
import { SwitcherTestModule } from './switcher/switcher-test.module';

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
    SwitcherTestModule,
    SelectableTestModule,
    FilterTestModule,
    ImageCropperTestModule,
    ImageUploaderTestModule
  ]
})
export class FormsTestModule {
}
