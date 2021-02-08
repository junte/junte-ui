import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
    AccordionModule, AppLayoutModule,
    AvatarModule,
    BlockModule,
    ButtonModule,
    CheckboxModule,
    FormModule,
    GridModule,
    IconModule,
    InputModule,
    LinkModule,
    RadioModule,
    SelectModule,
    StackModule,
    TabsModule
} from 'junte-ui';
import { SharedModule } from '../../shared/shared.module';
import { RadioTestComponent } from './radio-test.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        IconModule,
        LinkModule,
        StackModule,
        TabsModule,
        GridModule,
        FormModule,
        AccordionModule,
        ButtonModule,
        GridModule,
        SharedModule,
        RadioModule,
        AvatarModule,
        SelectModule,
        CheckboxModule,
        BlockModule,
        InputModule,
        AppLayoutModule
    ],
  exports: [
    RadioTestComponent
  ],
  declarations: [
    RadioTestComponent
  ]
})
export class RadioTestModule {
}
