import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GridModule, IconModule, LinkModule } from 'junte-ui';
import { CodeHighlightModule } from 'src/components/docs/shared/code-highlight/code-highlight.module';
import { JUNTE_UI_CONFIG } from 'src/consts';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    LinkModule.forRoot(JUNTE_UI_CONFIG),
    IconModule.forRoot(JUNTE_UI_CONFIG),
    GridModule.forRoot(JUNTE_UI_CONFIG),
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

