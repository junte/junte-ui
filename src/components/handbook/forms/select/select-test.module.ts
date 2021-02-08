import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  AccordionModule,
  AppLayoutModule,
  AvatarModule,
  ButtonModule,
  CheckboxModule,
  FormModule,
  GridModule,
  IconModule,
  InputModule,
  LabelModule,
  LinkModule,
  SelectModule,
  StackModule,
  TabsModule
} from 'junte-ui';
import { SharedModule } from '../../shared/shared.module';
import { SelectTestComponent } from './select-test.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonModule,
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
    SharedModule,
    CheckboxModule,
    InputModule,
    LabelModule,
    AppLayoutModule
  ],
  exports: [
    SelectTestComponent
  ],
  declarations: [
    SelectTestComponent
  ],
})
export class SelectTestModule {
}
