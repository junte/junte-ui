import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  AccordionModule,
  ArrayPipeModule,
  BadgeModule,
  BlockModule,
  ButtonModule,
  CheckboxModule,
  FormModule,
  GridModule,
  IconModule,
  LinkModule,
  SelectModule,
  StackModule,
  SwitcherModule,
  TabsModule
} from 'junte-ui';
import { SharedModule } from '../../shared/shared.module';
import { ButtonTestComponent } from './button-test.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LinkModule,
    StackModule,
    TabsModule,
    GridModule,
    FormModule,
    AccordionModule,
    GridModule,
    IconModule,
    ButtonModule,
    BlockModule,
    SelectModule,
    SwitcherModule,
    BadgeModule,
    CheckboxModule,
    ArrayPipeModule,
    SharedModule
  ],
  exports: [
    ButtonTestComponent
  ],
  declarations: [
    ButtonTestComponent
  ],
})
export class ButtonTestModule {
}

