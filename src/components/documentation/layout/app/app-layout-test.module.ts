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
  CheckboxModule,
  MenuModule,
  IconModule,
  AvatarModule,
  AppLayoutModule,
  SkeletonModule,
  LabelModule,
  BlockModule,
  BreadcrumbsModule,
  CalendarModule
} from 'junte-ui';
import { SharedModule } from '../../shared/shared.module';
import { AppLayoutTestComponent } from './app-layout-test.component';

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
    SharedModule,
    CheckboxModule,
    MenuModule,
    IconModule,
    AvatarModule,
    AppLayoutModule,
    SkeletonModule,
    LabelModule,
    BlockModule,
    BreadcrumbsModule,
    CalendarModule
  ],
  exports: [
    AppLayoutTestComponent
  ],
  declarations: [
    AppLayoutTestComponent
  ],
})
export class AppLayoutTestModule {
}
