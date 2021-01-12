import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  AccordionModule,
  AppLayoutModule,
  BlockModule,
  ButtonModule,
  CheckboxModule,
  FormModule,
  GridModule,
  IconModule,
  LinkModule,
  SelectModule,
  SkeletonModule,
  StackModule,
  SwitcherModule,
  TabsModule,
  PopoverModule
} from 'junte-ui';
import { SharedModule } from '../../shared/shared.module';
import { BlockTestComponent } from './block-test.component';

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
        SkeletonModule,
        ButtonModule,
        SelectModule,
        SwitcherModule,
        BlockModule,
        CheckboxModule,
        SharedModule,
        AppLayoutModule,
        PopoverModule
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
