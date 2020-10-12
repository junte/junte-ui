import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
    AccordionModule,
    BlockModule,
    ButtonModule,
    CheckboxModule,
    DatePickerModule,
    FormModule,
    GridModule,
    IconModule,
    InputModule,
    LinkModule,
    RadioModule,
    SelectModule,
    StackModule,
    SwitcherModule,
    SwitchModule,
    TabsModule,
    MessageModule,
    ArrayPipesModule,
    AppLayoutModule
} from 'junte-ui';
import { JUNTE_UI_CONFIG } from 'src/consts';
import { SharedModule } from '../../shared/shared.module';
import { FormTestComponent } from './form-test.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        LinkModule,
        StackModule,
        TabsModule,
        GridModule,
        FormModule,
        AccordionModule,
        GridModule,
        SharedModule,
        ButtonModule,
        CheckboxModule,
        InputModule,
        BlockModule,
        IconModule,
        RadioModule,
        DatePickerModule,
        SelectModule,
        SwitchModule,
        SwitcherModule,
        MessageModule,
        ArrayPipesModule,
        AppLayoutModule
    ],
  exports: [
    FormTestComponent
  ],
  declarations: [
    FormTestComponent
  ],
})
export class FormTestModule {
}
