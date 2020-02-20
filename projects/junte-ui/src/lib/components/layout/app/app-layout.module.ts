import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { IconModule } from '../../elements/icon/icon.module';
import { ButtonModule } from '../../forms/button/button.module';
import { StackModule } from '../stack/stack.module';
import { AppLayoutComponent } from './app-layout.component';
import { AppAsideComponent } from './aside/app-aside.component';
import { AppBodyComponent } from './body/app-body.component';
import { AppContentComponent } from './content/app-content.component';
import { AppFooterComponent } from './footer/app-footer.component';
import { AppHeaderActionComponent } from './header/action/app-header-action.component';
import { AppHeaderActionsComponent } from './header/actions/app-header-actions.component';
import { AppHeaderComponent } from './header/app-header.component';
import { AppHeaderUserbarComponent } from './header/userbar/app-header-userbar.component';
import { AppSubHeaderComponent } from './sub-header/app-sub-header.component';
import { JunteUIModuleConfig } from '../../../config';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { I18nLoader } from '../../../i18n/loader';
import { en } from '../../../i18n/en';

@NgModule({
  imports: [
    CommonModule,
    IconModule,
    StackModule,
    ButtonModule
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
    AppFooterComponent
  ],
  entryComponents: [
    AppLayoutComponent,
    AppHeaderComponent,
    AppHeaderActionsComponent,
    AppHeaderActionComponent,
    AppSubHeaderComponent,
    AppContentComponent
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
    AppFooterComponent
  ]
})
export class AppLayoutModule {

  static forRoot(config: JunteUIModuleConfig = {}): ModuleWithProviders<AppLayoutModule> {
    return {
      ngModule: AppLayoutModule,
      providers: [
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useValue: new I18nLoader(config.i18n || en)
          },
          defaultLanguage: 'en'
        }).providers]
    };
  }

}
