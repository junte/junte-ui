import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
    AccordionModule,
    AppLayoutModule,
    CheckboxModule,
    FormModule,
    GridModule,
    IconModule,
    InputModule,
    LinkModule,
    PictureModule,
    StackModule,
    SwitcherModule,
    TabsModule
} from 'junte-ui';
import { PictureTestComponent } from './picture-test.component';
import { JUNTE_UI_CONFIG } from 'src/consts';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        LinkModule,
        StackModule,
        TabsModule,
        GridModule,
        FormModule,
        AccordionModule,
        IconModule,
        CheckboxModule,
        PictureModule,
        SwitcherModule,
        InputModule,
        SharedModule,
        AppLayoutModule
    ],
  exports: [
    PictureTestComponent
  ],
  declarations: [
    PictureTestComponent
  ],
})
export class PictureTestModule {
}

