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
    IconModule.forRoot(JUNTE_UI_CONFIG),
    GridModule.forRoot(JUNTE_UI_CONFIG),
    StackModule.forRoot(JUNTE_UI_CONFIG),
    LinkModule.forRoot(JUNTE_UI_CONFIG),
    TabsModule.forRoot(JUNTE_UI_CONFIG),
    FormModule.forRoot(JUNTE_UI_CONFIG),
    SwitcherModule.forRoot(JUNTE_UI_CONFIG),
    CheckboxModule.forRoot(JUNTE_UI_CONFIG),
    AccordionModule.forRoot(JUNTE_UI_CONFIG),
    CalendarModule.forRoot(JUNTE_UI_CONFIG),
    BlockModule.forRoot(JUNTE_UI_CONFIG),
    DatePeriodModule.forRoot(JUNTE_UI_CONFIG)
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

