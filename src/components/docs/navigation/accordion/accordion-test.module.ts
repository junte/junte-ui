import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  IconModule, BlockModule,
  FormModule, GridModule, LinkModule, StackModule, TabsModule, CheckboxModule, SelectModule, AccordionModule, SwitcherModule
} from 'junte-ui';
import { JUNTE_UI_CONFIG } from 'src/consts';
import { SharedModule } from '../../shared/shared.module';
import { AccordionTestComponent } from './accordion-test.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    IconModule,
    LinkModule,
    StackModule,
    BlockModule,
    TabsModule,
    GridModule,
    AccordionModule,
    FormModule,
    CheckboxModule,
    SelectModule,
    SwitcherModule,
  ],
  exports: [
    AccordionTestComponent
  ],
  declarations: [
    AccordionTestComponent
  ],
})
export class AccordionTestModule {
}
