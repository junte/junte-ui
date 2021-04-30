import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  AccordionModule,
  AppLayoutModule,
  BadgeModule,
  CheckboxModule,
  DotModule,
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
import { BadgeTestComponent } from './badge-test.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LinkModule,
    StackModule,
    TabsModule,
    GridModule,
    BadgeModule,
    FormModule,
    AccordionModule,
    SelectModule,
    IconModule,
    SwitcherModule,
    CheckboxModule,
    SharedModule,
    DotModule,
    AppLayoutModule
  ],
  exports: [
    BadgeTestComponent
  ],
  declarations: [
    BadgeTestComponent
  ],
})
export class BadgeTestModule {
}

