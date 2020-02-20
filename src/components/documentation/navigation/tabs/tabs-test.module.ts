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
  BadgeModule,
  SkeletonModule,
  SelectModule,
  CheckboxModule
} from 'junte-ui';
import { SharedModule } from '../../shared/shared.module';
import { TabsTestComponent } from './tabs-test.component';

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
    BadgeModule,
    SkeletonModule,
    SelectModule,
    CheckboxModule,
    SharedModule
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
