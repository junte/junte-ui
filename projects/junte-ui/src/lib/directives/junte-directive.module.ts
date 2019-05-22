import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StringTemplateOutletDirective } from './string-template-outlet';
import { AttributeDirective } from './attribute';
import { SmartWidthDirective } from './smart-width';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    StringTemplateOutletDirective,
    AttributeDirective,
    SmartWidthDirective
  ],
  exports: [
    StringTemplateOutletDirective,
    AttributeDirective,
    SmartWidthDirective
  ]
})
export class JunteDirectiveModule {
}
