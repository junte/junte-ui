import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
    AccordionModule,
    AppLayoutModule,
    BlockModule,
    ButtonModule,
    CheckboxModule,
    FormModule,
    GridModule,
    IconModule,
    InputModule,
    LinkModule,
    PopoverModule,
    SelectModule,
    StackModule,
    SwitcherModule,
    TabsModule
} from 'junte-ui';
import { JUNTE_UI_CONFIG } from 'src/consts';
import { SharedModule } from '../../shared/shared.module';
import { PopoverTestComponent } from './popover-test.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        BlockModule,
        AccordionModule,
        StackModule,
        IconModule,
        LinkModule,
        GridModule,
        TabsModule,
        ButtonModule,
        PopoverModule,
        InputModule,
        FormModule,
        SwitcherModule,
        SelectModule,
        CheckboxModule,
        SharedModule,
        AppLayoutModule
    ],
  exports: [
    PopoverTestComponent
  ],
  declarations: [
    PopoverTestComponent
  ]
})
export class PopoverTestModule {
}
