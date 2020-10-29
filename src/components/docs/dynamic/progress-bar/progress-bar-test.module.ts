import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
    AccordionModule,
    AppLayoutModule, ButtonModule,
    CheckboxModule,
    FormModule,
    GridModule,
    IconModule,
    InputModule,
    LinkModule,
    ProgressBarModule,
    StackModule,
    TabsModule
} from 'junte-ui';
import { SharedModule } from '../../shared/shared.module';
import { ProgressBarTestComponent } from './progress-bar-test.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        IconModule,
        LinkModule,
        StackModule,
        TabsModule,
        GridModule,
        AccordionModule,
        SharedModule,
        FormsModule,
        ProgressBarModule,
        InputModule,
        FormModule,
        CheckboxModule,
        AppLayoutModule,
        ButtonModule
    ],
  exports: [
    ProgressBarTestComponent
  ],
  declarations: [
    ProgressBarTestComponent
  ],
})
export class ProgressBarTestModule {
}

