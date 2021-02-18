import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppLayoutModule, GridModule } from 'junte-ui';
import { ImageUploaderTestModule } from 'src/components/handbook/forms/image-uploader/image-uploader-test.module';
import { SliderTestModule } from 'src/components/handbook/forms/slider/slider-test.module';
import { SectionModule } from '../shared/section/section.module';
import { ButtonTestModule } from './button/button-test.module';
import { CalendarTestModule } from './calendar/calendar-test.module';
import { CheckboxTestModule } from './checkbox/checkbox-test.module';
import { DatePickerTestModule } from './date-picker/date-picker-test.module';
import { FilterTestModule } from './filter/filter-test.module';
import { FormTestModule } from './form/form-test.module';
import { FormsRoutingModule } from './forms-routing.module';
import { FormsTestComponent } from './forms-test.component';
import { ImageCropperTestModule } from './image-cropper/image-cropper-test.module';
import { InputTestModule } from './input/input-test.module';
import { RadioTestModule } from './radio/radio-test.module';
import { SelectTestModule } from './select/select-test.module';
import { SelectableTestModule } from './selectable/selectable-test.module';
import { SwitchTestModule } from './switch/switch-test.module';
import { SwitcherTestModule } from './switcher/switcher-test.module';

@NgModule({
  declarations: [
    FormsTestComponent
  ],
  imports: [
    CommonModule,
    FormsRoutingModule,
    SectionModule,
    AppLayoutModule,
    GridModule
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
    ImageUploaderTestModule,
    SliderTestModule,
    FormsTestComponent
  ]
})
export class FormsTestModule {
}
