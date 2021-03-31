import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  AccordionModule,
  AppLayoutModule,
  AvatarModule,
  BlockModule,
  BreadcrumbsModule,
  CalendarModule,
  CheckboxModule,
  FormModule,
  GridModule,
  IconModule,
  LabelModule,
  LinkModule,
  MenuModule,
  SkeletonModule,
  StackModule,
  TabsModule
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
