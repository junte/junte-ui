import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  IconModule,
  AccordionModule,
  CircleBarModule,
  FormModule,
  GridModule,
  InputModule,
  LinkModule,
  StackModule,
  TabsModule,
  AvatarModule
} from 'junte-ui';
import { JUNTE_UI_CONFIG } from 'src/consts';
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
    InputModule
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

