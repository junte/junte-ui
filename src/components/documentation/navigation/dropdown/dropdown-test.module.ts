import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { LinkModule, StackModule, TabsModule, GridModule, FormModule, AccordionModule, MenuModule, ButtonModule, DropdownModule } from 'junte-ui';
import { SharedModule } from '../../shared/shared.module';
import { DropdownTestComponent } from './dropdown-test.component';

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
    MenuModule,
    DropdownModule,
    ButtonModule,
    SharedModule
  ],
  exports: [
    DropdownTestComponent
  ],
  declarations: [
    DropdownTestComponent
  ],
})
export class DropdownTestModule {
}
