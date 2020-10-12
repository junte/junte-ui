import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
    AccordionModule,
    CheckboxModule,
    FormModule,
    GridModule,
    InputModule,
    LinkModule,
    SelectModule,
    StackModule,
    SwitcherModule,
    ButtonModule,
    TabsModule,
    IconModule,
    AppLayoutModule
} from 'junte-ui';
import { JUNTE_UI_CONFIG } from 'src/consts';
import { SharedModule } from '../../shared/shared.module';
import { InputTestComponent } from './input-test.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        IconModule,
        ButtonModule,
        LinkModule,
        StackModule,
        TabsModule,
        GridModule,
        FormModule,
        AccordionModule,
        GridModule,
        InputModule,
        SelectModule,
        CheckboxModule,
        SwitcherModule,
        SharedModule,
        AppLayoutModule
    ],
  exports: [
    InputTestComponent
  ],
  declarations: [
    InputTestComponent
  ],
})
export class InputTestModule {
}
