import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  LinkModule,
  StackModule,
  TabsModule,
  GridModule,
  FormModule,
  AccordionModule,
  IconModule,
  ButtonModule,
  BlockModule,
  SwitcherModule,
  BadgeModule,
  CheckboxModule,
  SelectModule
} from 'junte-ui';
import { ArrayPipeModule } from 'projects/junte-ui/src/lib/pipes/array-pipe.module';
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

