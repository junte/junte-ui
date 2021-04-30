import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  AccordionModule,
  AppLayoutModule,
  DotModule,
  FormModule,
  GridModule,
  IconModule,
  CheckboxModule,
  LinkModule,
  MessageModule,
  SelectModule,
  StackModule,
  TabsModule
} from 'junte-ui';
import { SharedModule } from '../../shared/shared.module';
import { MessageTestComponent } from './message-test.component';

@NgModule({
  imports: [
    CommonModule,
    IconModule,
    MessageModule,
    CheckboxModule,
    LinkModule,
    GridModule,
    StackModule,
    TabsModule,
    FormModule,
    SelectModule,
    AccordionModule,
    IconModule,
    DotModule,
    SharedModule,
    ReactiveFormsModule,
    AppLayoutModule,
  ],
  exports: [
    MessageTestComponent
  ],
  declarations: [
    MessageTestComponent
  ]
})
export class MessageTestModule {
}
