import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  AccordionModule,
  AppLayoutModule,
  FormModule,
  GridModule,
  IconModule,
  LinkModule,
  StackModule,
  TabsModule,
  TimelineModule
} from 'junte-ui';
import { SharedModule } from '../../shared/shared.module';
import { TimelineTestComponent } from './timeline-test.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IconModule,
    StackModule,
    TabsModule,
    GridModule,
    AccordionModule,
    FormModule,
    LinkModule,
    TimelineModule,
    SharedModule,
    AppLayoutModule,
  ],
  exports: [
    TimelineTestComponent
  ],
  declarations: [
    TimelineTestComponent
  ],
})
export class TimelineTestModule {
}

