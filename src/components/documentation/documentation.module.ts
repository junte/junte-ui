import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppLayoutModule, BreadcrumbsModule, MenuModule, ModalModule, PopoverModule, StackModule, ThemeSwitcherModule } from 'junte-ui';
import { HighlightModule } from 'ngx-highlightjs';
import { AppFooterModule } from 'src/components/app-footer/app-footer.module';
import { JUNTE_UI_CONFIG } from 'src/consts';
import { OutletModule } from '../outlet/outlet.module';
import { SelectLangModule } from '../select-lang/select-lang.module';
import { DocumentationRoutingModule } from './documentation-routing.module';
import { DocumentationComponent } from './documentation.component';

import { HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

export function getHighlightLanguages() {
  return {
    typescript: () => import('highlight.js/lib/languages/typescript'),
    scss: () => import('highlight.js/lib/languages/scss'),
    xml: () => import('highlight.js/lib/languages/xml')
  };
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HighlightModule,
    OutletModule,
    AppLayoutModule.forRoot(JUNTE_UI_CONFIG),
    MenuModule.forRoot(JUNTE_UI_CONFIG),
    BreadcrumbsModule.forRoot(JUNTE_UI_CONFIG),
    ThemeSwitcherModule.forRoot(JUNTE_UI_CONFIG),
    PopoverModule.forRoot(JUNTE_UI_CONFIG),
    ModalModule.forRoot(JUNTE_UI_CONFIG),
    StackModule.forRoot(JUNTE_UI_CONFIG),
    SelectLangModule,
    AppFooterModule,
    DocumentationRoutingModule
  ],
  declarations: [
    DocumentationComponent,
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        languages: getHighlightLanguages()
      }
    }
  ]
})
export class DocumentationModule {

}
