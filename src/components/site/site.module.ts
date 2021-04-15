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
import { SiteRoutingModule } from 'src/components/site/site-routing.module';
import { SiteComponent } from 'src/components/site/site.component';
import { AnalyticsDirectivesModule } from 'src/directives/analytics.module';
import { AppFooterModule } from '../footer/app-footer.module';
import { ModalTestModule } from '../handbook/overlays/modal/modal-test.module';
import { SelectLangModule } from '../select-lang/select-lang.module';

@NgModule({
  declarations: [
    SiteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    ReactiveFormsModule,

    AppLayoutModule,
    MenuModule,
    BreadcrumbsModule,
    ThemeSwitcherModule,
    PopoverModule,
    ModalModule,
    StackModule,
    BadgeModule,
    SelectLangModule,
    AppFooterModule,
    ModalTestModule,
    ResponsiveModule,
    MenuModule,

    AnalyticsDirectivesModule,

    SiteRoutingModule
  ]
})
export class SiteModule {

}
