import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  AccordionModule,
  AppLayoutModule,
  AvatarModule,
  CircleBarModule,
  FormModule,
  GridModule,
  IconModule,
  InputModule,
  LinkModule,
  StackModule,
  TabsModule
} from 'junte-ui';
import { SharedModule } from '../../shared/shared.module';

import { CircleBarTestComponent } from './circle-bar-test.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IconModule,
    AvatarModule,
    LinkModule,
    StackModule,
    TabsModule,
    GridModule,
    AccordionModule,
    FormModule,
    CircleBarModule,
    FormsModule,
    SharedModule,
    InputModule,
    AppLayoutModule
  ],
  exports: [
    CircleBarTestComponent
  ],
  declarations: [
    CircleBarTestComponent
  ],
})
export class CircleBarTestModule {
}

