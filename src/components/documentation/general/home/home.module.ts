import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GridModule, IconModule, LinkModule } from 'junte-ui';
import { CodeHighlightModule } from 'src/components/documentation/shared/code-highlight/code-highlight.module';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    LinkModule,
    IconModule,
    GridModule,
    CodeHighlightModule
  ],
  exports: [
    HomeComponent
  ],
  declarations: [
    HomeComponent
  ],
})
export class HomeModule {
}

