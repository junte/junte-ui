import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  AccordionModule,
  AppLayoutModule,
  AvatarModule,
  BlockModule,
  ButtonModule,
  ChartModule,
  CheckboxModule,
  FormModule,
  GridModule,
  IconModule,
  InputModule,
  LabelModule,
  LinkModule,
  StackModule,
  TabsModule
} from 'junte-ui';
import { SharedModule } from '../../shared/shared.module';
import { ChartTestComponent } from './chart-test.component';

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
    ChartModule,
    BlockModule,
    LabelModule,
    ButtonModule,
    InputModule,
    CheckboxModule,
    AvatarModule,
    SharedModule,
    AppLayoutModule,
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

