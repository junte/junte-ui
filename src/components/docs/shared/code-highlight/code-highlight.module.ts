import { ObserversModule } from '@angular/cdk/observers';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LinkModule } from 'junte-ui';
import { ClipboardModule } from 'ngx-clipboard';
import { HighlightModule } from 'ngx-highlightjs';
import { JUNTE_UI_CONFIG } from 'src/consts';
import { CodeHighlightComponent } from './code-highlight.component';

@NgModule({
  imports: [
    CommonModule,
    LinkModule.forRoot(JUNTE_UI_CONFIG),
    ClipboardModule,
    ObserversModule,
    HighlightModule
  ],
  exports: [CodeHighlightComponent],
  declarations: [CodeHighlightComponent],
  providers: [],
})
export class CodeHighlightModule {
}

