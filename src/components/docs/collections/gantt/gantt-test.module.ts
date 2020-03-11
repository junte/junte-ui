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
import { JUNTE_UI_CONFIG } from 'src/consts';
import { DateFnsModule } from 'ngx-date-fns';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LinkModule.forRoot(JUNTE_UI_CONFIG),
    StackModule.forRoot(JUNTE_UI_CONFIG),
    TabsModule.forRoot(JUNTE_UI_CONFIG),
    GridModule.forRoot(JUNTE_UI_CONFIG),
    AccordionModule.forRoot(JUNTE_UI_CONFIG),
    FormModule.forRoot(JUNTE_UI_CONFIG),
    SharedModule,
    GanttModule.forRoot(JUNTE_UI_CONFIG),
    ButtonModule.forRoot(JUNTE_UI_CONFIG),
    BlockModule.forRoot(JUNTE_UI_CONFIG),
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
