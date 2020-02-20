import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  LinkModule,
  StackModule,
  TabsModule,
  GridModule,
  BadgeModule,
  FormModule,
  AccordionModule,
  SelectModule,
  IconModule,
  SwitcherModule
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
    SharedModule
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

