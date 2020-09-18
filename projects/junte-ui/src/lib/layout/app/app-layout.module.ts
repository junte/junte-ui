import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { BadgeModule } from '../../elements/badge/badge.module';
import { IconModule } from '../../elements/icon/icon.module';
import { ButtonModule } from '../../forms/button/button.module';
import { MenuModule } from '../../navigation/menu/menu.module';
import { PopoverModule } from '../../overlays/popover/popover.module';
import { ResponsiveModule } from '../responsive/responsive.module';
import { SpinnerModule } from '../spinner/spinner.module';
import { StackModule } from '../stack/stack.module';
import { AppLayoutComponent } from './app-layout.component';
import { AppAsideComponent } from './aside/app-aside.component';
import { AppBodyComponent } from './body/app-body.component';
import { AppBusynessComponent } from './busyness/app-busyness.component';
import { AppContentComponent } from './content/app-content.component';
import { AppFooterComponent } from './footer/app-footer.component';
import { AppHeaderActionComponent } from './header/action/app-header-action.component';
import { AppHeaderActionsComponent } from './header/actions/app-header-actions.component';
import { AppHeaderComponent } from './header/app-header.component';
import { AppHeaderUserbarComponent } from './header/userbar/app-header-userbar.component';
import { AppSubHeaderComponent } from './sub-header/app-sub-header.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    IconModule,
    StackModule,
    ButtonModule,
    MenuModule,
    ResponsiveModule,
    PopoverModule,
    BadgeModule,
    SpinnerModule
  ],
  declarations: [
    AppLayoutComponent,
    AppHeaderComponent,
    AppHeaderActionComponent,
    AppHeaderActionsComponent,
    AppHeaderUserbarComponent,
    AppSubHeaderComponent,
    AppAsideComponent,
    AppBodyComponent,
    AppContentComponent,
    AppFooterComponent,
    AppBusynessComponent
  ],
  entryComponents: [
    AppLayoutComponent,
    AppHeaderComponent,
    AppHeaderActionsComponent,
    AppHeaderActionComponent,
    AppSubHeaderComponent,
    AppContentComponent,
    AppBusynessComponent
  ],
  exports: [
    AppLayoutComponent,
    AppHeaderComponent,
    AppHeaderActionComponent,
    AppHeaderActionsComponent,
    AppHeaderUserbarComponent,
    AppSubHeaderComponent,
    AppAsideComponent,
    AppBodyComponent,
    AppContentComponent,
    AppFooterComponent,
    AppBusynessComponent
  ]
})
export class AppLayoutModule {
}
