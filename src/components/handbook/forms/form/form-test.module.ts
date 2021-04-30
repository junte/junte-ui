import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  AccordionModule,
  AppLayoutModule,
  ArrayPipesModule,
  BlockModule,
  ButtonModule,
  CheckboxModule,
  DatePickerModule,
  FormModule,
  GridModule,
  IconModule,
  InputModule,
  LinkModule,
  MessageModule,
  RadioModule,
  SelectModule,
  StackModule,
  SwitcherModule,
  SwitchModule,
  TabsModule
} from 'junte-ui';
import { SharedModule } from '../../shared/shared.module';
import { FormTestComponent } from './form-test.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    LinkModule,
    StackModule,
    TabsModule,
    GridModule,
    FormModule,
    AccordionModule,
    GridModule,
    SharedModule,
    ButtonModule,
    CheckboxModule,
    InputModule,
    BlockModule,
    IconModule,
    RadioModule,
    DatePickerModule,
    SelectModule,
    SwitchModule,
    SwitcherModule,
    MessageModule,
    ArrayPipesModule,
    AppLayoutModule
  ],
  exports: [
    FormTestComponent
  ],
  declarations: [
    FormTestComponent
  ],
})
export class FormTestModule {
}
