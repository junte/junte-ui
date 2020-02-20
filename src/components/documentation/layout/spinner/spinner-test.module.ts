import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { LinkModule, StackModule, TabsModule, GridModule, FormModule, AccordionModule, SelectModule, SpinnerModule } from 'junte-ui';
import { SharedModule } from '../../shared/shared.module';
import { SpinnerTestComponent } from './spinner-test.component';

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
    SelectModule,
    GridModule,
    SpinnerModule,
    SharedModule
  ],
  exports: [
    SpinnerTestComponent
  ],
  declarations: [
    SpinnerTestComponent
  ],
})
export class SpinnerTestModule {
}
