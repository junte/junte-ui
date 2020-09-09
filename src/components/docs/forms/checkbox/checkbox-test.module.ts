import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  AccordionModule,
  ArrayPipesModule,
  AvatarModule,
  BlockModule,
  ButtonModule,
  CheckboxModule,
  FormModule,
  GridModule,
  IconModule,
  LabelModule,
  LinkModule,
  SelectModule,
  StackModule,
  TabsModule
} from 'junte-ui';
import { JUNTE_UI_CONFIG } from 'src/consts';
import { SharedModule } from '../../shared/shared.module';
import { CheckboxTestComponent } from './checkbox-test.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IconModule,
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
    SelectModule,
    ArrayPipesModule,
    ButtonModule
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
