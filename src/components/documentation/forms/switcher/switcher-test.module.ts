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
  SelectModule,
  BadgeModule,
  SwitcherModule,
  CheckboxModule,
  DotModule
} from 'junte-ui';
import { SharedModule } from '../../shared/shared.module';
import { SwitcherTestComponent } from './switcher-test.component';

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
    SelectModule,
    BadgeModule,
    SharedModule,
    SwitcherModule,
    CheckboxModule,
    DotModule
  ],
  exports: [
    SwitcherTestComponent
  ],
  declarations: [
    SwitcherTestComponent
  ],
})
export class SwitcherTestModule {
}
