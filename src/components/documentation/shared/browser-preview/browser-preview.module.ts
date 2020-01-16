import { NgModule } from '@angular/core';
import { BrowserPreviewComponent } from './browser-preview.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  exports: [BrowserPreviewComponent],
  declarations: [BrowserPreviewComponent],
  providers: [],
})
export class BrowserPreviewModule {
}

