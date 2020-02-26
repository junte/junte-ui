import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LinkModule, StackModule, TabsModule, GridModule, AccordionModule, FormModule, CircleBarModule, InputModule } from 'junte-ui';
import { SharedModule } from '../../shared/shared.module';

import { CircleBarTestComponent } from './circle-bar-test.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LinkModule,
    StackModule,
    TabsModule,
    GridModule,
    AccordionModule,
    FormModule,
    SharedModule,
    CircleBarModule,
    FormsModule,
    InputModule
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

