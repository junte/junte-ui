import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  AccordionModule,
  AppLayoutModule,
  AvatarModule,
  BlockModule,
  CheckboxModule,
  FormModule,
  GridModule,
  IconModule,
  LabelModule,
  LinkModule,
  SelectModule,
  StackModule,
  SwitcherModule,
  TabsModule
} from 'junte-ui';
import { SharedModule } from '../../shared/shared.module';
import { AccordionTestComponent } from './accordion-test.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    IconModule,
    LinkModule,
    StackModule,
    BlockModule,
    TabsModule,
    GridModule,
    AccordionModule,
    FormModule,
    CheckboxModule,
    SelectModule,
    SwitcherModule,
    AppLayoutModule,
    LabelModule,
    AvatarModule
  ],
  exports: [
    AccordionTestComponent
  ],
  declarations: [
    AccordionTestComponent
  ],
})
export class AccordionTestModule {
}
