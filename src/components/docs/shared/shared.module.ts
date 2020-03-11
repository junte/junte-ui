import { NgModule } from '@angular/core';
import { BrowserPreviewModule } from './browser-preview/browser-preview.module';
import { CodeHighlightModule } from './code-highlight/code-highlight.module';
import { ComponentApiComponentModule } from './component-api/component-api.module';
import { HowToUseModule } from './how-to-use/how-to-use.module';

@NgModule({
  exports: [
    BrowserPreviewModule,
    CodeHighlightModule,
    ComponentApiComponentModule,
    HowToUseModule
  ]
})
export class SharedModule {
}
