import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  AccordionModule,
  AppLayoutModule,
  BlockModule,
  ButtonModule,
  FormModule,
  GanttModule,
  GanttPipesModule,
  GridModule,
  IconModule,
  LinkModule,
  StackModule,
  SwitcherModule,
  TabsModule
} from 'junte-ui';
import { DateFnsModule } from 'ngx-date-fns';
import { SharedModule } from '../../shared/shared.module';
import { GanttTestComponent } from './gantt-test.component';

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
    GanttModule,
    ButtonModule,
    BlockModule,
    SwitcherModule,
    GanttPipesModule,
    SharedModule,
    DateFnsModule,
    StackModule,
    AppLayoutModule
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
