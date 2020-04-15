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
    IconModule.forRoot(JUNTE_UI_CONFIG),
    AvatarModule.forRoot(JUNTE_UI_CONFIG),
    LinkModule.forRoot(JUNTE_UI_CONFIG),
    StackModule.forRoot(JUNTE_UI_CONFIG),
    TabsModule.forRoot(JUNTE_UI_CONFIG),
    GridModule.forRoot(JUNTE_UI_CONFIG),
    AccordionModule.forRoot(JUNTE_UI_CONFIG),
    FormModule.forRoot(JUNTE_UI_CONFIG),
    CircleBarModule.forRoot(JUNTE_UI_CONFIG),
    FormsModule,
    SharedModule,
    InputModule.forRoot(JUNTE_UI_CONFIG)
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

