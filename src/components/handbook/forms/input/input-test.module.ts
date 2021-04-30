import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  AccordionModule,
  AppLayoutModule,
  ArrayPipesModule,
  ButtonModule,
  CheckboxModule,
  FormModule,
  GridModule,
  IconModule,
  InputModule,
  LinkModule,
  SelectModule,
  StackModule,
  SwitcherModule,
  TabsModule
} from 'junte-ui';
import { SharedModule } from '../../shared/shared.module';
import { InputTestComponent } from './input-test.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IconModule,
    ButtonModule,
    LinkModule,
    StackModule,
    TabsModule,
    GridModule,
    FormModule,
    AccordionModule,
    GridModule,
    InputModule,
    SelectModule,
    CheckboxModule,
    SwitcherModule,
    SharedModule,
    AppLayoutModule,
    ArrayPipesModule
  ],
  exports: [
    InputTestComponent
  ],
  declarations: [
    InputTestComponent
  ],
})
export class InputTestModule {
}
