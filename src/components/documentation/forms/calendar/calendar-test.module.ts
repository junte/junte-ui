import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  CalendarModule,
  GridModule,
  StackModule,
  LinkModule,
  TabsModule,
  AccordionModule,
  FormModule,
  SwitcherModule,
  CheckboxModule,
  ru
} from 'junte-ui';
import { DateFnsModule } from 'ngx-date-fns';
import { SharedModule } from 'src/components/documentation/shared/shared.module';
import { getJunteUiConfig } from '../../../../utils/config';
import { CalendarTestComponent } from './calendar-test.component';

const config = getJunteUiConfig();

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
    CalendarModule.forRoot(config)
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

