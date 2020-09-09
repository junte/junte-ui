import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GridModule, IconModule, LinkModule, TimelineModule } from 'junte-ui';
import { CodeHighlightModule } from 'src/components/docs/shared/code-highlight/code-highlight.module';
import { JUNTE_UI_CONFIG } from 'src/consts';
import { HomeComponent } from './home.component';

@NgModule({
    imports: [
        CommonModule,
        LinkModule,
        IconModule,
        GridModule,
        TimelineModule,
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

