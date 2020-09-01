import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  AccordionModule,
  ButtonModule,
  CheckboxModule,
  FormModule,
  GridModule,
  IconModule,
  LinkModule,
  StackModule,
  TabsModule,
  TimerModule
} from 'junte-ui';
import { JUNTE_UI_CONFIG } from 'src/consts';
import { SharedModule } from '../../shared/shared.module';
import { TimerTestComponent } from './timer-test.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IconModule.forRoot(JUNTE_UI_CONFIG),
    LinkModule.forRoot(JUNTE_UI_CONFIG),
    StackModule.forRoot(JUNTE_UI_CONFIG),
    TabsModule.forRoot(JUNTE_UI_CONFIG),
    GridModule.forRoot(JUNTE_UI_CONFIG),
    AccordionModule.forRoot(JUNTE_UI_CONFIG),
    FormModule.forRoot(JUNTE_UI_CONFIG),
    ButtonModule.forRoot(JUNTE_UI_CONFIG),
    CheckboxModule.forRoot(JUNTE_UI_CONFIG),
    TimerModule.forRoot(JUNTE_UI_CONFIG),
    SharedModule,
  ],
  exports: [
    TimerTestComponent
  ],
  declarations: [
    TimerTestComponent
  ],
})
export class TimerTestModule {
}

