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
import { HandbookModule } from 'src/components/docs/handbook/handbook.module';
import { AnalyticsDirectivesModule } from 'src/directives/analytics.module';
import { AppFooterModule } from '../footer/app-footer.module';
import { OutletModule } from '../outlet/outlet.module';
import { SelectLangModule } from '../select-lang/select-lang.module';
import { DocsRoutingModule } from './docs-routing.module';
import { DocsComponent } from './docs.component';
import { ModalTestModule } from './overlays/modal/modal-test.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HighlightModule,
        OutletModule,
        AppLayoutModule,
        MenuModule,
        BreadcrumbsModule,
        ThemeSwitcherModule,
        PopoverModule,
        ModalModule,
        StackModule,
        BadgeModule,
        TranslateModule,
        SelectLangModule,
        AppFooterModule,
        DocsRoutingModule,
        ModalTestModule,
        ResponsiveModule,
        HandbookModule,
        AnalyticsDirectivesModule,
        MenuModule
    ],
  declarations: [
    DocsComponent
  ]
})
export class DocsModule {

}
