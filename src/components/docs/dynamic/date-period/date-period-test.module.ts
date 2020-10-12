import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
    AccordionModule,
    IconModule,
    DatePeriodModule,
    DatePickerModule,
    FormModule,
    GridModule,
    LinkModule,
    StackModule,
    TabsModule,
    AppLayoutModule
} from 'junte-ui';
import { DateFnsModule } from 'ngx-date-fns';
import { JUNTE_UI_CONFIG } from 'src/consts';
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

