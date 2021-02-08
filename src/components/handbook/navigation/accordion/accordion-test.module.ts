import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
    AccordionModule,
    AppLayoutModule,
    BlockModule,
    CheckboxModule,
    FormModule,
    GridModule,
    IconModule,
    LinkModule,
    SelectModule,
    StackModule,
    SwitcherModule,
    TabsModule
} from 'junte-ui';
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
        AppLayoutModule,
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
