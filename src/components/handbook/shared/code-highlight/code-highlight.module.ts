import { ObserversModule } from '@angular/cdk/observers';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LinkModule } from 'junte-ui';
import { ClipboardModule } from 'ngx-clipboard';
import { HighlightModule } from 'ngx-highlightjs';
import { CodeHighlightComponent } from './code-highlight.component';

@NgModule({
  imports: [
    CommonModule,
    LinkModule,
    ClipboardModule,
    ObserversModule,
    HighlightModule
  ],
  exports: [CodeHighlightComponent],
  declarations: [CodeHighlightComponent]
})
export class CodeHighlightModule {
}

