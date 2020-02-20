import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { LinkModule, StackModule, TabsModule, GridModule, FormModule, AccordionModule, SwitcherModule, PaginationModule, BlockModule } from 'junte-ui';
import { ArrayPipeModule } from 'projects/junte-ui/src/lib/pipes/array-pipe.module';
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
