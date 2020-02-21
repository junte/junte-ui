import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  AccordionModule,
  BlockModule,
  ButtonModule,
  DatePipeModule,
  FormModule,
  GanttModule,
  GridModule,
  LinkModule,
  StackModule,
  TabsModule
} from 'junte-ui';
import { SharedModule } from '../../shared/shared.module';
import { GanttTestComponent } from './gantt-test.component';

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
    SharedModule,
    GanttModule,
    ButtonModule,
    BlockModule,
    DatePipeModule
  ],
  exports: [
    GanttTestComponent
  ],
  declarations: [
    GanttTestComponent
  ],
})
export class GanttTestModule {
}
