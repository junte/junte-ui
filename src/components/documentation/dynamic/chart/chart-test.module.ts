import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  LinkModule,
  StackModule,
  TabsModule,
  GridModule,
  AccordionModule,
  FormModule,
  BlockModule,
  ChartModule,
  LabelModule,
  ButtonModule,
  InputModule
} from 'junte-ui';
import { SharedModule } from '../../shared/shared.module';
import { ChartTestComponent } from './chart-test.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LinkModule,
    StackModule,
    TabsModule,
    GridModule,
    AccordionModule,
    FormModule,
    ChartModule,
    BlockModule,
    SharedModule,
    LabelModule,
    ButtonModule,
    InputModule
  ],
  exports: [
    ChartTestComponent
  ],
  declarations: [
    ChartTestComponent
  ],
})
export class ChartTestModule {
}

