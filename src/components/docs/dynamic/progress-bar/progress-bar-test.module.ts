import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LinkModule, StackModule, TabsModule, GridModule, AccordionModule, ProgressBarModule, FormModule, InputModule, CheckboxModule } from 'junte-ui';
import { JUNTE_UI_CONFIG } from 'src/consts';
import { SharedModule } from '../../shared/shared.module';
import { ProgressBarTestComponent } from './progress-bar-test.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LinkModule.forRoot(JUNTE_UI_CONFIG),
    StackModule.forRoot(JUNTE_UI_CONFIG),
    TabsModule.forRoot(JUNTE_UI_CONFIG),
    GridModule.forRoot(JUNTE_UI_CONFIG),
    AccordionModule.forRoot(JUNTE_UI_CONFIG),
    SharedModule,
    FormsModule,
    ProgressBarModule.forRoot(JUNTE_UI_CONFIG),
    InputModule.forRoot(JUNTE_UI_CONFIG),
    FormModule.forRoot(JUNTE_UI_CONFIG),
    CheckboxModule.forRoot(JUNTE_UI_CONFIG)
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

