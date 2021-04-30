import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
    AccordionModule,
    ArrayPipesModule,
    ButtonModule,
    FormModule,
    GridModule,
    IconModule,
    LabelModule,
    LinkModule,
    SelectModule,
    StackModule,
    TabsModule,
    SelectableModule,
    AppLayoutModule
} from 'junte-ui';
import { SharedModule } from '../../shared/shared.module';
import { IconTestComponent } from './icon-test.component';
import { GetIconsPipe, IconsListComponent } from './icons-list/icons-list.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        LinkModule,
        AccordionModule,
        StackModule,
        TabsModule,
        GridModule,
        FormModule,
        GridModule,
        IconModule,
        SelectModule,
        LabelModule,
        ButtonModule,
        ArrayPipesModule,
        SharedModule,
        SelectableModule,
        AppLayoutModule
    ],
  exports: [
    IconTestComponent
  ],
  declarations: [
    IconTestComponent,
    IconsListComponent,
    GetIconsPipe
  ],
})
export class IconTestModule {
}
