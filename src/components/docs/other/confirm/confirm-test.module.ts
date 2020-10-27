import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  AccordionModule,
  AppLayoutModule,
  BlockModule,
  ButtonModule,
  ConfirmModule,
  FormModule,
  GridModule,
  IconModule,
  LinkModule,
  ModalModule,
  PopoverModule,
  SelectModule,
  StackModule,
  SwitcherModule,
  TabsModule
} from 'junte-ui';
import { SharedModule } from '../../shared/shared.module';
import { ConfirmTestComponent } from './confirm-test.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ConfirmModule,
    StackModule,
    IconModule,
    LinkModule,
    GridModule,
    AccordionModule,
    TabsModule,
    BlockModule,
    FormModule,
    SwitcherModule,
    SelectModule,
    PopoverModule,
    ModalModule,
    ButtonModule,
    SharedModule,
    AppLayoutModule,
  ],
  exports: [
    ConfirmTestComponent
  ],
  declarations: [
    ConfirmTestComponent
  ]
})
export class ConfirmTestModule {
}
