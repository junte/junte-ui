import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import {
  AppLayoutModule,
  BadgeModule,
  BreadcrumbsModule,
  MenuModule,
  ModalModule,
  PopoverModule,
  ResponsiveModule,
  StackModule,
  ThemeSwitcherModule
} from 'junte-ui';
import { HighlightModule } from 'ngx-highlightjs';
import { ComponentsModule } from 'src/components/docs/components/components.module';
import { AppFooterModule } from '../footer/app-footer.module';
import { ModalTestModule } from './overlays/modal/modal-test.module';
import { JUNTE_UI_CONFIG } from 'src/consts';
import { OutletModule } from '../outlet/outlet.module';
import { SelectLangModule } from '../select-lang/select-lang.module';
import { DocsRoutingModule } from './docs-routing.module';
import { DocsComponent } from './docs.component';
import { AnalyticsDirectivesModule } from 'src/directives/analytics.module';

import { HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import {MenuModule} from '../../../projects/junte-ui/src/lib/navigation/menu/menu.module';

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
        BadgeModule.forRoot(JUNTE_UI_CONFIG),
        TranslateModule,
        SelectLangModule,
        AppFooterModule,
        DocsRoutingModule,
        ModalTestModule,
        ResponsiveModule,
        ComponentsModule,
        AnalyticsDirectivesModule,
        MenuModule
    ],
  declarations: [
    DocsComponent,
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
export class DocsModule {

}
