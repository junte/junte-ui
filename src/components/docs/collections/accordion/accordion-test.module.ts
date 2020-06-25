import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  AccordionModule, IconModule, BlockModule,
  FormModule, GridModule, LinkModule, StackModule, TabsModule, CheckboxModule, SelectModule
} from 'junte-ui';
import { JUNTE_UI_CONFIG } from 'src/consts';
import { SharedModule } from '../../shared/shared.module';
import { AccordionTestComponent } from './accordion-test.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    IconModule.forRoot(JUNTE_UI_CONFIG),
    LinkModule.forRoot(JUNTE_UI_CONFIG),
    StackModule.forRoot(JUNTE_UI_CONFIG),
    BlockModule.forRoot(JUNTE_UI_CONFIG),
    TabsModule.forRoot(JUNTE_UI_CONFIG),
    GridModule.forRoot(JUNTE_UI_CONFIG),
    AccordionModule.forRoot(JUNTE_UI_CONFIG),
    FormModule.forRoot(JUNTE_UI_CONFIG),
    CheckboxModule.forRoot(JUNTE_UI_CONFIG),
    SelectModule.forRoot(JUNTE_UI_CONFIG),
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
