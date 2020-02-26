import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  LinkModule,
  StackModule,
  TabsModule,
  GridModule,
  FormModule,
  AccordionModule,
  ButtonModule,
  InputModule,
  BlockModule,
  CheckboxModule,
  IconModule,
  RadioModule,
  DatePickerModule,
  SelectModule,
  SwitchModule,
  SwitcherModule
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
    SwitcherModule
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
