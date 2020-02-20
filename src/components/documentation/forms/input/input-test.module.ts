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
  InputModule,
  SelectModule,
  CheckboxModule,
  SwitcherModule
} from 'junte-ui';
import { SharedModule } from '../../shared/shared.module';
import { InputTestComponent } from './input-test.component';

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
    InputModule,
    SelectModule,
    CheckboxModule,
    SwitcherModule,
    SharedModule
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
