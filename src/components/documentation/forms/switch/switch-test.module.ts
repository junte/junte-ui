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
  SwitchModule,
  CheckboxModule
} from 'junte-ui';
import { SharedModule } from '../../shared/shared.module';
import { SwitchTestComponent } from './switch-test.component';

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
    SwitchModule,
    CheckboxModule
  ],
  exports: [
    SwitchTestComponent
  ],
  declarations: [
    SwitchTestComponent
  ],
})
export class SwitchTestModule {
}
