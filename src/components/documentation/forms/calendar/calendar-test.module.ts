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
  TabsModule
} from 'junte-ui';
import { DateFnsModule } from 'ngx-date-fns';
import { SharedModule } from 'src/components/documentation/shared/shared.module';
import { JUNTE_UI_CONFIG } from '../../../../consts';
import { CalendarTestComponent } from './calendar-test.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DateFnsModule,
    SharedModule,
    GridModule,
    StackModule,
    LinkModule,
    TabsModule,
    FormModule,
    SwitcherModule,
    CheckboxModule,
    AccordionModule,
    CalendarModule.forRoot(JUNTE_UI_CONFIG)
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

