import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  AccordionModule,
  AppLayoutModule,
  DatePeriodModule,
  DatePickerModule,
  FormModule,
  GridModule,
  IconModule,
  LinkModule,
  StackModule,
  TabsModule
} from 'junte-ui';
import { DateFnsModule } from 'ngx-date-fns';
import { SharedModule } from '../../shared/shared.module';
import { DatePeriodTestComponent } from './date-period-test.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IconModule,
    LinkModule,
    StackModule,
    TabsModule,
    GridModule,
    AccordionModule,
    FormModule,
    DatePeriodModule,
    DatePickerModule,
    SharedModule,
    DateFnsModule,
    AppLayoutModule
  ],
  exports: [
    DatePeriodTestComponent
  ],
  declarations: [
    DatePeriodTestComponent
  ],
})
export class DatePeriodTestModule {
}

