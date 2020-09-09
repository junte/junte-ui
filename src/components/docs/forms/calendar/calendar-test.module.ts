import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  AccordionModule,
  CalendarModule,
  CheckboxModule,
  FormModule,
  GridModule,
  LinkModule,
  StackModule,
  SwitcherModule,
  BlockModule,
  DatePeriodModule,
  TabsModule,
  IconModule
} from 'junte-ui';
import { DateFnsModule } from 'ngx-date-fns';
import { SharedModule } from 'src/components/docs/shared/shared.module';
import { JUNTE_UI_CONFIG } from 'src/consts';
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
    DatePeriodModule
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

