import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  AccordionModule,
  AppLayoutModule,
  AvatarModule,
  BadgeModule,
  CheckboxModule,
  FormModule,
  GridModule,
  IconModule,
  LabelModule,
  LinkModule,
  SelectModule,
  StackModule,
  SwitcherModule,
  SwitchModule,
  TabsModule
} from 'junte-ui';
import { SharedModule } from '../../shared/shared.module';
import { SwitchTestComponent } from './switch-test.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IconModule,
    LinkModule,
    StackModule,
    TabsModule,
    GridModule,
    FormModule,
    AccordionModule,
    GridModule,
    SelectModule,
    AvatarModule,
    SwitchModule,
    CheckboxModule,
    SharedModule,
    AppLayoutModule,
    BadgeModule,
    LabelModule,
    SwitcherModule
  ],
  exports: [
    SwitchTestComponent
  ],
  declarations: [
    SwitchTestComponent
  ]
})
export class SwitchTestModule {
}
