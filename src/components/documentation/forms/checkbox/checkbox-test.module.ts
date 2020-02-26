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
  LabelModule,
  AvatarModule,
  BlockModule,
  SelectModule
} from 'junte-ui';
import { SharedModule } from '../../shared/shared.module';
import { CheckboxTestComponent } from './checkbox-test.component';

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
    LabelModule,
    AvatarModule,
    BlockModule,
    SelectModule
  ],
  exports: [
    CheckboxTestComponent
  ],
  declarations: [
    CheckboxTestComponent
  ],
})
export class CheckboxTestModule {
}
