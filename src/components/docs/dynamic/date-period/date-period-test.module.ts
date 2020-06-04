import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AccordionModule, IconModule, DatePeriodModule, DatePickerModule, FormModule, GridModule, LinkModule, StackModule, TabsModule } from 'junte-ui';
import { DateFnsModule } from 'ngx-date-fns';
import { JUNTE_UI_CONFIG } from 'src/consts';
import { SharedModule } from '../../shared/shared.module';
import { DatePeriodTestComponent } from './date-period-test.component';
import { AnalyticsDirectivesModule } from 'src/directives/analytics.module';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        IconModule.forRoot(JUNTE_UI_CONFIG),
        LinkModule.forRoot(JUNTE_UI_CONFIG),
        StackModule.forRoot(JUNTE_UI_CONFIG),
        TabsModule.forRoot(JUNTE_UI_CONFIG),
        GridModule.forRoot(JUNTE_UI_CONFIG),
        AccordionModule.forRoot(JUNTE_UI_CONFIG),
        FormModule.forRoot(JUNTE_UI_CONFIG),
        DatePeriodModule.forRoot(JUNTE_UI_CONFIG),
        DatePickerModule.forRoot(JUNTE_UI_CONFIG),
        SharedModule,
        DateFnsModule,
        AnalyticsDirectivesModule
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

