import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  AccordionModule, AppLayoutModule,
  AvatarModule, BadgeModule,
  BlockModule,
  ButtonModule,
  CheckboxModule,
  FormModule,
  GridModule,
  IconModule,
  InputModule,
  LabelModule,
  LinkModule,
  RadioModule,
  SelectModule,
  StackModule,
  TabsModule
} from 'junte-ui';
import { SharedModule } from '../../shared/shared.module';
import { RadioTestComponent } from './radio-test.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        IconModule,
        BadgeModule,
        LinkModule,
        StackModule,
        TabsModule,
        GridModule,
        FormModule,
        AccordionModule,
        ButtonModule,
        GridModule,
        LabelModule,
        SharedModule,
        RadioModule,
        AvatarModule,
        SelectModule,
        CheckboxModule,
        BlockModule,
        InputModule,
        AppLayoutModule
    ],
  exports: [
    RadioTestComponent
  ],
  declarations: [
    RadioTestComponent
  ]
})
export class RadioTestModule {
}
