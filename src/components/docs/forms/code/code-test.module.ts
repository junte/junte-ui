import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  AccordionModule,
  CheckboxModule,
  FormModule,
  GridModule,
  InputModule,
  LinkModule,
  SelectModule,
  StackModule,
  SwitcherModule,
  ButtonModule,
  TabsModule,
  IconModule,
  CodeModule
} from 'junte-ui';
import { JUNTE_UI_CONFIG } from 'src/consts';
import { SharedModule } from '../../shared/shared.module';
import { CodeTestComponent } from './code-test.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CodeModule,
    IconModule.forRoot(JUNTE_UI_CONFIG),
    ButtonModule.forRoot(JUNTE_UI_CONFIG),
    LinkModule.forRoot(JUNTE_UI_CONFIG),
    StackModule.forRoot(JUNTE_UI_CONFIG),
    TabsModule.forRoot(JUNTE_UI_CONFIG),
    GridModule.forRoot(JUNTE_UI_CONFIG),
    FormModule.forRoot(JUNTE_UI_CONFIG),
    AccordionModule.forRoot(JUNTE_UI_CONFIG),
    GridModule.forRoot(JUNTE_UI_CONFIG),
    InputModule.forRoot(JUNTE_UI_CONFIG),
    SelectModule.forRoot(JUNTE_UI_CONFIG),
    CheckboxModule.forRoot(JUNTE_UI_CONFIG),
    SwitcherModule.forRoot(JUNTE_UI_CONFIG),
    SharedModule
  ],
  exports: [
    CodeTestComponent
  ],
  declarations: [
    CodeTestComponent
  ],
})
export class CodeTestModule {
}
