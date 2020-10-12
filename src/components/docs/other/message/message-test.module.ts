import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
    MessageModule,
    GridModule,
    LinkModule,
    StackModule,
    TabsModule,
    FormModule,
    SelectModule,
    AccordionModule,
    IconModule,
    DotModule,
    AppLayoutModule
} from 'junte-ui';
import { SharedModule } from '../../shared/shared.module';
import { JUNTE_UI_CONFIG } from 'src/consts';
import { MessageTestComponent } from './message-test.component';

@NgModule({
    imports: [
        CommonModule,
        IconModule,
        MessageModule,
        LinkModule,
        GridModule,
        StackModule,
        TabsModule,
        FormModule,
        SelectModule,
        AccordionModule,
        IconModule,
        DotModule,
        SharedModule,
        ReactiveFormsModule,
        AppLayoutModule,
    ],
  exports: [
    MessageTestComponent
  ],
  declarations: [
    MessageTestComponent
  ]
})
export class MessageTestModule {
}
