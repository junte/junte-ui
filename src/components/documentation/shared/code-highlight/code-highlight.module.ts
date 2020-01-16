import { NgModule } from '@angular/core';
import { CodeHighlightComponent } from './code-highlight.component';
import { CommonModule } from '@angular/common';
import { PrismModule } from '@ngx-prism/core';

@NgModule({
  imports: [
    CommonModule,
    PrismModule
  ],
  exports: [CodeHighlightComponent],
  declarations: [CodeHighlightComponent],
  providers: [],
})
export class CodeHighlightModule {
}

