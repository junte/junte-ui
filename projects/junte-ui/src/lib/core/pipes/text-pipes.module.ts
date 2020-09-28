import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SanitizeHtmlPipe } from './text/sanitizeHtml.pipe';
import { EmptyPipe } from './text/empty.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    EmptyPipe,
    SanitizeHtmlPipe
  ],
  exports: [
    EmptyPipe,
    SanitizeHtmlPipe
  ]
})
export class TextPipesModule {
}
