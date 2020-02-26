import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { LinkModule, StackModule, TabsModule, GridModule, AccordionModule, FormModule, DatePeriodModule, DatePickerModule } from 'junte-ui';
import { SharedModule } from '../../shared/shared.module';
import { DatePeriodTestComponent } from './date-period-test.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LinkModule,
    StackModule,
    TabsModule,
    GridModule,
    AccordionModule,
    FormModule,
    DatePeriodModule,
    DatePickerModule,
    SharedModule
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

