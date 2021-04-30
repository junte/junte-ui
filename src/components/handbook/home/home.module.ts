import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GridModule, IconModule, LabelModule, LinkModule, StackModule, TimelineModule } from 'junte-ui';
import { HomeRoutingModule } from './home-routing.module';
import { CodeHighlightModule } from '../shared/code-highlight/code-highlight.module';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    LinkModule,
    IconModule,
    GridModule,
    TimelineModule,
    CodeHighlightModule,
    LabelModule,
    StackModule
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

