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
        IconModule.forRoot(JUNTE_UI_CONFIG),
        LinkModule.forRoot(JUNTE_UI_CONFIG),
        StackModule.forRoot(JUNTE_UI_CONFIG),
        TabsModule.forRoot(JUNTE_UI_CONFIG),
        GridModule.forRoot(JUNTE_UI_CONFIG),
        AccordionModule.forRoot(JUNTE_UI_CONFIG),
        FormModule.forRoot(JUNTE_UI_CONFIG),
        GanttModule.forRoot(JUNTE_UI_CONFIG),
        ButtonModule.forRoot(JUNTE_UI_CONFIG),
        BlockModule.forRoot(JUNTE_UI_CONFIG),
        SwitcherModule.forRoot(JUNTE_UI_CONFIG),
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
