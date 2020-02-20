import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { PrismModule } from '@ngx-prism/core';
import {
  StackModule,
  IconModule,
  LinkModule,
  GridModule,
  SwitcherModule,
  TabsModule,
  ButtonModule,
  FormModule,
  CheckboxModule,
  CalendarModule
} from 'junte-ui';
import { SharedModule } from '../../shared/shared.module';
import { ModalTestFactoryComponent } from './test.component';
import { ModalTestComponent } from './modal-test.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StackModule,
    IconModule,
    LinkModule,
    GridModule,
    TabsModule,
    ButtonModule,
    FormModule,
    SharedModule,
    SwitcherModule,
    CheckboxModule,
    CalendarModule,
    PrismModule
  ],
  exports: [
    ModalTestComponent,
    ModalTestFactoryComponent
  ],
  declarations: [
    ModalTestComponent,
    ModalTestFactoryComponent
  ]
})
export class ModalTestModule {
}
