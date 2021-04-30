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
  SkeletonModule,
  StackModule,
  TabsModule
} from 'junte-ui';
import { SharedModule } from '../../shared/shared.module';
import { TabsTestComponent } from './tabs-test.component';

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
    BadgeModule,
    SkeletonModule,
    SelectModule,
    CheckboxModule,
    SharedModule,
    AppLayoutModule,
    AvatarModule,
    LabelModule
  ],
  exports: [
    TabsTestComponent
  ],
  declarations: [
    TabsTestComponent
  ],
})
export class TabsTestModule {
}
