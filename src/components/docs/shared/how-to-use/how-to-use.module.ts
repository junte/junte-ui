import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeHighlightModule } from '../code-highlight/code-highlight.module';
import { HowToUseComponent } from './how-to-use.component';

@NgModule({
  imports: [
    CommonModule,
    CodeHighlightModule
  ],
  exports: [HowToUseComponent],
  declarations: [HowToUseComponent],
  providers: [],
})
export class HowToUseModule {
}

