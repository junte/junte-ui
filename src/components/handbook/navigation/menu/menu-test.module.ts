import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  AccordionModule,
  AppLayoutModule,
  BadgeModule,
  CheckboxModule,
  FormModule,
  GridModule,
  IconModule,
  LinkModule,
  MenuModule,
  SelectModule,
  StackModule,
  SwitcherModule,
  TabsModule
} from 'junte-ui';
import { SharedModule } from '../../shared/shared.module';
import { MenuTestComponent } from './menu-test.component';

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
    MenuModule,
    BadgeModule,
    SelectModule,
    CheckboxModule,
    SharedModule,
    AppLayoutModule,
    SwitcherModule,
  ],
  exports: [
    MenuTestComponent
  ],
  declarations: [
    MenuTestComponent
  ],
})
export class MenuTestModule {
}
