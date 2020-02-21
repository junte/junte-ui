import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  AccordionModule,
  ArrayPipeModule,
  BlockModule,
  FormModule,
  GridModule,
  LinkModule,
  PaginationModule,
  StackModule,
  SwitcherModule,
  TabsModule
} from 'junte-ui';
import { SharedModule } from '../../shared/shared.module';
import { PaginationTestComponent } from './pagination-test.component';

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
    SwitcherModule,
    PaginationModule,
    BlockModule,
    ArrayPipeModule,
    SharedModule
  ],
  exports: [
    PaginationTestComponent
  ],
  declarations: [
    PaginationTestComponent
  ],
})
export class PaginationTestModule {
}
