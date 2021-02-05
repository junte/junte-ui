import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import {
  AccordionModule,
  AppLayoutModule,
  ButtonModule,
  CheckboxModule,
  DatePickerModule,
  FormModule,
  GridModule,
  IconModule,
  LabelModule,
  LinkModule,
  SelectModule,
  StackModule,
  SwitcherModule,
  TabsModule
} from 'junte-ui';
import { DateFnsModule } from 'ngx-date-fns';
import { SharedModule } from '../../shared/shared.module';
import { DatePickerTestComponent } from './date-picker-test.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule,
    DateFnsModule,
    DatePickerModule,
    ButtonModule,
    IconModule,
    LinkModule,
    StackModule,
    TabsModule,
    GridModule,
    FormModule,
    AccordionModule,
    GridModule,
    SwitcherModule,
    CheckboxModule,
    LabelModule,
    SelectModule,
    SharedModule,
    AppLayoutModule
  ],
  exports: [
    DatePickerTestComponent
  ],
  declarations: [
    DatePickerTestComponent
  ]
})
export class DatePickerTestModule {
}
