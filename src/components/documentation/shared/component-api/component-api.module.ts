import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TextPipeModule } from 'junte-ui';
import { CodeHighlightModule } from '../code-highlight/code-highlight.module';
import { ComponentApiComponent } from './component-api.component';

@NgModule({
  imports: [
    CommonModule,
    CodeHighlightModule,
    TextPipeModule
  ],
  exports: [
    ComponentApiComponent
  ],
  declarations: [
    ComponentApiComponent
  ]
})
export class ComponentApiComponentModule {
}
