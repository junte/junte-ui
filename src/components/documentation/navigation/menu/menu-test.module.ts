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
  MenuModule,
  BadgeModule,
  SelectModule,
  CheckboxModule
} from 'junte-ui';
import { SharedModule } from '../../shared/shared.module';
import { MenuTestComponent } from './menu-test.component';

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
    MenuModule,
    BadgeModule,
    SelectModule,
    CheckboxModule,
    SharedModule
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
