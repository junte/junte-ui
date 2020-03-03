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
  DotModule
} from 'junte-ui';
import { SharedModule } from '../../shared/shared.module';
import { DotTestComponent } from './dot-test.component';

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
    DotModule,
    SharedModule
  ],
  exports: [
    DotTestComponent
  ],
  declarations: [
    DotTestComponent
  ],
})
export class DotTestModule {
}

