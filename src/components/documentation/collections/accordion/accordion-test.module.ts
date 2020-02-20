import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AccordionModule, FormModule, GridModule, StackModule, LinkModule, TabsModule, BlockModule } from 'junte-ui';
import { SharedModule } from '../../shared/shared.module';
import { AccordionTestComponent } from './accordion-test.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    LinkModule,
    StackModule,
    BlockModule,
    TabsModule,
    GridModule,
    AccordionModule,
    FormModule
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
