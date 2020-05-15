import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  AccordionModule,
  BlockModule,
  ButtonModule, CheckboxModule, FormModule,
  GridModule,
  IconModule,
  InputModule,
  LinkModule,
  PopoverModule, SelectModule,
  StackModule, SwitcherModule,
  TabsModule
} from 'junte-ui';
import { JUNTE_UI_CONFIG } from 'src/consts';
import { SharedModule } from '../../shared/shared.module';
import { PopoverTestComponent } from './popover-test.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BlockModule.forRoot(JUNTE_UI_CONFIG),
    AccordionModule.forRoot(JUNTE_UI_CONFIG),
    StackModule.forRoot(JUNTE_UI_CONFIG),
    IconModule.forRoot(JUNTE_UI_CONFIG),
    LinkModule.forRoot(JUNTE_UI_CONFIG),
    GridModule.forRoot(JUNTE_UI_CONFIG),
    TabsModule.forRoot(JUNTE_UI_CONFIG),
    ButtonModule.forRoot(JUNTE_UI_CONFIG),
    PopoverModule.forRoot(JUNTE_UI_CONFIG),
    InputModule.forRoot(JUNTE_UI_CONFIG),
    FormModule.forRoot(JUNTE_UI_CONFIG),
    SwitcherModule.forRoot(JUNTE_UI_CONFIG),
    SelectModule.forRoot(JUNTE_UI_CONFIG),
    CheckboxModule.forRoot(JUNTE_UI_CONFIG),
    SharedModule
  ],
  exports: [
    PopoverTestComponent
  ],
  declarations: [
    PopoverTestComponent
  ]
})
export class PopoverTestModule {
}
