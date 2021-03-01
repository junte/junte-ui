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
import { HomeModule } from './home/home.module';
import { IndexModule } from 'src/components/handbook/index/index.module';
import { ThemingModule } from './theming/theming.module';
import { TypographyModule } from 'src/components/handbook/typography/typography.module';
import { AnalyticsDirectivesModule } from 'src/directives/analytics.module';
import { AppFooterModule } from '../footer/app-footer.module';
import { OutletModule } from '../outlet/outlet.module';
import { SelectLangModule } from '../select-lang/select-lang.module';
import { HandbookRoutingModule } from 'src/components/handbook/handbook-routing.module';
import { HandbookComponent } from 'src/components/handbook/handbook.component';
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
    HandbookRoutingModule,
    ModalTestModule,
    ResponsiveModule,
    IndexModule,
    AnalyticsDirectivesModule,
    MenuModule
  ],
  declarations: [
    HandbookComponent
  ]
})
export class HandbookModule {

}
