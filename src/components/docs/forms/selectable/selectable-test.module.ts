import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
    AccordionModule,
    AppLayoutModule,
    AvatarModule,
    BlockModule,
    ButtonModule,
    CardModule,
    CheckboxModule,
    FormModule,
    GridModule,
    IconModule,
    InputModule,
    LabelModule,
    LinkModule,
    SelectableModule,
    SelectModule,
    StackModule,
    TabsModule
} from 'junte-ui';
import { SharedModule } from 'src/components/docs/shared/shared.module';
import { JUNTE_UI_CONFIG } from 'src/consts';
import { SelectableTestComponent } from './selectable-test.component';


@NgModule({
  declarations: [SelectableTestComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        BlockModule,
        CardModule,
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
        SelectableModule,
        AppLayoutModule
    ]
})
export class SelectableTestModule {
}
