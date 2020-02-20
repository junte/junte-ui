import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  FormModule,
  LinkModule,
  StackModule,
  TabsModule,
  GridModule,
  AccordionModule,
  GanttModule,
  ButtonModule,
  BlockModule
} from 'junte-ui';
import { DatePipeModule } from 'projects/junte-ui/src/lib/pipes/date-pipe.module';
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
