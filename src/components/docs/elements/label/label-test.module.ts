import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  AccordionModule,
  AppLayoutModule,
  CheckboxModule,
  DotModule,
  FormModule,
  GridModule,
  IconModule,
  LabelModule,
  LinkModule,
  SelectModule,
  StackModule,
  TabsModule
} from 'junte-ui';
import { SharedModule } from '../../shared/shared.module';
import { LabelTestComponent } from './label-test.component';

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
    IconModule,
    SelectModule,
    LabelModule,
    CheckboxModule,
    SharedModule,
    DotModule,
    AppLayoutModule
  ],
  exports: [
    LabelTestComponent
  ],
  declarations: [
    LabelTestComponent
  ],
})
export class LabelTestModule {
}

