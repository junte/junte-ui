import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SanitizeHtmlPipe, SanitizeStylePipe } from './sanitize.pipe';

@NgModule({
  declarations: [
    SanitizeHtmlPipe,
    SanitizeStylePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SanitizeHtmlPipe,
    SanitizeStylePipe
  ]
})
export class SanitizePipeModule {
}
