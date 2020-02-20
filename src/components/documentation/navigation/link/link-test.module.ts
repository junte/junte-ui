import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { LinkModule, StackModule, TabsModule, GridModule, FormModule, AccordionModule, SelectModule, CheckboxModule, BadgeModule } from 'junte-ui';
import { SharedModule } from '../../shared/shared.module';
import { LinkTestComponent } from './link-test.component';

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
    CheckboxModule,
    BadgeModule,
    SharedModule
  ],
  exports: [
    LinkTestComponent
  ],
  declarations: [
    LinkTestComponent
  ],
})
export class LinkTestModule {
}
