import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  AccordionModule,
  ArrayPipesModule,
  BadgeModule,
  BlockModule,
  ButtonModule,
  CheckboxModule,
  FormModule,
  GridModule,
  IconModule,
  LinkModule,
  SelectModule,
  StackModule,
  SwitcherModule,
  TabsModule
} from 'junte-ui';
import { JUNTE_UI_CONFIG } from 'src/consts';
import { SharedModule } from '../../shared/shared.module';
import { ButtonTestComponent } from './button-test.component';

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
    IconModule,
    ButtonModule,
    BlockModule,
    SelectModule,
    SwitcherModule,
    BadgeModule,
    CheckboxModule,
    ArrayPipesModule,
    SharedModule
  ],
  exports: [
    ButtonTestComponent
  ],
  declarations: [
    ButtonTestComponent
  ],
})
export class ButtonTestModule {
}

