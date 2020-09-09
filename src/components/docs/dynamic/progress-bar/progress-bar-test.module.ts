import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LinkModule, IconModule, StackModule, TabsModule, GridModule, AccordionModule, ProgressBarModule, FormModule, InputModule, CheckboxModule } from 'junte-ui';
import { JUNTE_UI_CONFIG } from 'src/consts';
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
    CheckboxModule
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

