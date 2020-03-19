import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  AccordionModule,
  AvatarModule,
  CheckboxModule,
  FormModule,
  GridModule,
  InputModule,
  LabelModule,
  LinkModule,
  SelectModule,
  StackModule,
  TabsModule
} from 'junte-ui';
import { JUNTE_UI_CONFIG } from 'src/consts';
import { SharedModule } from '../../shared/shared.module';
import { SelectTestComponent } from './select-test.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LinkModule.forRoot(JUNTE_UI_CONFIG),
    StackModule.forRoot(JUNTE_UI_CONFIG),
    TabsModule.forRoot(JUNTE_UI_CONFIG),
    GridModule.forRoot(JUNTE_UI_CONFIG),
    FormModule.forRoot(JUNTE_UI_CONFIG),
    AccordionModule.forRoot(JUNTE_UI_CONFIG),
    GridModule.forRoot(JUNTE_UI_CONFIG),
    SelectModule.forRoot(JUNTE_UI_CONFIG),
    AvatarModule.forRoot(JUNTE_UI_CONFIG),
    SharedModule,
    CheckboxModule.forRoot(JUNTE_UI_CONFIG),
    InputModule.forRoot(JUNTE_UI_CONFIG),
    LabelModule.forRoot(JUNTE_UI_CONFIG)
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