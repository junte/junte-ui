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
  SelectModule,
  AvatarModule,
  CheckboxModule,
  InputModule,
  LabelModule
} from 'junte-ui';
import { SharedModule } from '../../shared/shared.module';
import { SelectTestComponent } from './select-test.component';

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
    SelectModule,
    AvatarModule,
    SharedModule,
    CheckboxModule,
    InputModule,
    LabelModule
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
