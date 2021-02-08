import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  AccordionModule,
  AppLayoutModule,
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
import { SharedModule } from '../../shared/shared.module';
import { TimerTestComponent } from './timer-test.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IconModule,
    LinkModule,
    StackModule,
    TabsModule,
    GridModule,
    AccordionModule,
    FormModule,
    ButtonModule,
    CheckboxModule,
    TimerModule,
    SharedModule,
    AppLayoutModule,
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

