import { NgModule } from '@angular/core';
import { ResponsiveModule } from 'junte-ui';
import { BrowserPreviewComponent } from './browser-preview.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    ResponsiveModule
  ],
  exports: [BrowserPreviewComponent],
  declarations: [BrowserPreviewComponent],
  providers: [],
})
export class BrowserPreviewModule {
}

