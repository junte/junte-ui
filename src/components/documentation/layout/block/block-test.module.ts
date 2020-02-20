import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  LinkModule,
  StackModule,
  TabsModule,
  GridModule,
  FormModule,
  AccordionModule,
  SkeletonModule,
  ButtonModule,
  SelectModule,
  SwitcherModule,
  BlockModule,
  CheckboxModule
} from 'junte-ui';
import { SharedModule } from '../../shared/shared.module';
import { BlockTestComponent } from './block-test.component';

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
    SkeletonModule,
    ButtonModule,
    SelectModule,
    SwitcherModule,
    BlockModule,
    CheckboxModule,
    SharedModule
  ],
  exports: [
    BlockTestComponent
  ],
  declarations: [
    BlockTestComponent
  ],
})
export class BlockTestModule {
}
