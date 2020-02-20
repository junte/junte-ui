import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  LinkModule,
  StackModule,
  TabsModule,
  GridModule,
  FormModule,
  AccordionModule,
  SwitcherModule,
  DatePickerModule,
  CheckboxModule
} from 'junte-ui';
import { DateFnsModule } from 'ngx-date-fns';
import { SharedModule } from '../../shared/shared.module';
import { DatePickerTestComponent } from './date-picker-test.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DateFnsModule,
    LinkModule,
    StackModule,
    TabsModule,
    GridModule,
    FormModule,
    AccordionModule,
    GridModule,
    SwitcherModule,
    DatePickerModule,
    CheckboxModule,
    SharedModule
  ],
  exports: [
    DatePickerTestComponent
  ],
  declarations: [
    DatePickerTestComponent
  ],
})
export class DatePickerTestModule {
}
