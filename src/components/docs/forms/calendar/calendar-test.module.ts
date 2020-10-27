import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  AccordionModule,
  AppLayoutModule,
  BlockModule,
  ButtonModule,
  CalendarModule,
  CheckboxModule,
  DatePeriodModule,
  FormModule,
  GridModule,
  IconModule,
  LinkModule,
  StackModule,
  SwitcherModule,
  TabsModule
} from 'junte-ui';
import { DateFnsModule } from 'ngx-date-fns';
import { SharedModule } from 'src/components/docs/shared/shared.module';
import { CalendarTestComponent } from './calendar-test.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DateFnsModule,
    SharedModule,
    IconModule,
    GridModule,
    StackModule,
    LinkModule,
    TabsModule,
    FormModule,
    SwitcherModule,
    CheckboxModule,
    AccordionModule,
    CalendarModule,
    BlockModule,
    DatePeriodModule,
    ButtonModule,
    AppLayoutModule
  ],
  declarations: [
    CalendarTestComponent
  ],
  exports: [
    CalendarTestComponent
  ],
})
export class CalendarTestModule {
}

