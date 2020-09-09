import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  AccordionModule,
  IconModule,
  BlockModule,
  ButtonModule,
  FormModule,
  GanttModule,
  GridModule,
  GanttPipesModule,
  LinkModule,
  StackModule,
  TabsModule,
  SwitcherModule
} from 'junte-ui';
import { DateFnsModule } from 'ngx-date-fns';
import { JUNTE_UI_CONFIG } from 'src/consts';
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
        StackModule
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
