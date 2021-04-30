import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  AccordionModule,
  AppLayoutModule,
  ArrayPipesModule,
  AvatarModule,
  BadgeModule,
  BlockModule,
  ButtonModule,
  CheckboxModule,
  DotModule,
  FormModule,
  GridModule,
  IconModule,
  LabelModule,
  LinkModule,
  SelectModule,
  StackModule,
  SwitcherModule,
  TabsModule
} from 'junte-ui';
import { SharedModule } from '../../shared/shared.module';
import { SwitcherTestComponent } from './switcher-test.component';

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
    BadgeModule,
    SwitcherModule,
    CheckboxModule,
    DotModule,
    AvatarModule,
    BlockModule,
    ButtonModule,
    LabelModule,
    SharedModule,
    ArrayPipesModule,
    AppLayoutModule
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
