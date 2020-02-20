import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { PrismModule } from '@ngx-prism/core';
import { LinkModule, StackModule, TabsModule, GridModule, FormModule, AccordionModule, ButtonModule, InputModule, BlockModule } from 'junte-ui';
import { SharedModule } from '../../shared/shared.module';
import { FormTestComponent } from './form-test.component';

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
    GridModule,
    SharedModule,
    ButtonModule,
    InputModule,
    BlockModule,
    PrismModule
  ],
  exports: [
    FormTestComponent
  ],
  declarations: [
    FormTestComponent
  ],
})
export class FormTestModule {
}
