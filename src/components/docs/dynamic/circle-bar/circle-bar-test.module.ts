import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccordionModule, CircleBarModule, FormModule, GridModule, InputModule, LinkModule, StackModule, TabsModule } from 'junte-ui';
import { JUNTE_UI_CONFIG } from 'src/consts';
import { SharedModule } from '../../shared/shared.module';

import { CircleBarTestComponent } from './circle-bar-test.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LinkModule.forRoot(JUNTE_UI_CONFIG),
    StackModule.forRoot(JUNTE_UI_CONFIG),
    TabsModule.forRoot(JUNTE_UI_CONFIG),
    GridModule.forRoot(JUNTE_UI_CONFIG),
    AccordionModule.forRoot(JUNTE_UI_CONFIG),
    FormModule.forRoot(JUNTE_UI_CONFIG),
    SharedModule,
    CircleBarModule.forRoot(JUNTE_UI_CONFIG),
    FormsModule,
    InputModule.forRoot(JUNTE_UI_CONFIG)
  ],
  exports: [
    CircleBarTestComponent
  ],
  declarations: [
    CircleBarTestComponent
  ],
})
export class CircleBarTestModule {
}

