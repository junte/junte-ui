import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
    AccordionModule,
    BadgeModule,
    CheckboxModule,
    DotModule,
    FormModule,
    GridModule,
    LinkModule,
    SelectModule,
    StackModule,
    SwitcherModule,
    AvatarModule,
    BlockModule,
    TabsModule,
    LabelModule,
    ButtonModule,
    IconModule,
    ArrayPipesModule,
    AppLayoutModule
} from 'junte-ui';
import { JUNTE_UI_CONFIG } from 'src/consts';
import { SharedModule } from '../../shared/shared.module';
import { SwitcherTestComponent } from './switcher-test.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        IconModule,
        LinkModule,
        StackModule,
        TabsModule,
        GridModule,
        FormModule,
        AccordionModule,
        GridModule,
        SelectModule,
        BadgeModule,
        SwitcherModule,
        CheckboxModule,
        DotModule,
        AvatarModule,
        BlockModule,
        ButtonModule,
        LabelModule,
        SharedModule,
        ArrayPipesModule,
        AppLayoutModule
    ],
  exports: [
    SwitcherTestComponent
  ],
  declarations: [
    SwitcherTestComponent
  ],
})
export class SwitcherTestModule {
}
