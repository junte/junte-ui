import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrismModule } from '@ngx-prism/core';
import {
  LinkModule,
  StackModule,
  TabsModule,
  GridModule,
  FormModule,
  AccordionModule,
  RadioModule,
  AvatarModule,
  SelectModule,
  CheckboxModule,
  BlockModule,
  ButtonModule
} from 'junte-ui';
import { SharedModule } from '../../shared/shared.module';
import { RadioTestComponent } from './radio-test.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LinkModule,
    StackModule,
    TabsModule,
    GridModule,
    FormModule,
    AccordionModule,
    ButtonModule,
    GridModule,
    SharedModule,
    RadioModule,
    AvatarModule,
    SelectModule,
    CheckboxModule,
    BlockModule,
    PrismModule
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
