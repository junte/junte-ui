import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
    ButtonModule,
    AccordionModule,
    AvatarModule,
    CheckboxModule,
    FormModule,
    GridModule,
    IconModule,
    InputModule,
    LabelModule,
    LinkModule,
    SelectModule,
    StackModule,
    TabsModule,
    AppLayoutModule
} from 'junte-ui';
import { JUNTE_UI_CONFIG } from 'src/consts';
import { SharedModule } from '../../shared/shared.module';
import { SelectTestComponent } from './select-test.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ButtonModule,
        IconModule,
        LinkModule,
        StackModule,
        TabsModule,
        GridModule,
        FormModule,
        AccordionModule,
        GridModule,
        SelectModule,
        AvatarModule,
        SharedModule,
        CheckboxModule,
        InputModule,
        LabelModule,
        AppLayoutModule
    ],
  exports: [
    SelectTestComponent
  ],
  declarations: [
    SelectTestComponent
  ],
})
export class SelectTestModule {
}
