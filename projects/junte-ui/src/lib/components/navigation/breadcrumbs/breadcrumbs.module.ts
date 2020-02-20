import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { StackModule } from '../../layout/stack/stack.module';
import { IconModule } from '../../elements/icon/icon.module';
import { BreadcrumbsComponent } from './breadcrumbs.component';
import { JunteUIModuleConfig } from '../../../config';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { I18nLoader } from '../../../i18n/loader';
import { en } from '../../../i18n/en';

@NgModule({
  imports: [
    CommonModule,
    IconModule,
    StackModule
  ],
  declarations: [
    BreadcrumbsComponent
  ],
  exports: [
    BreadcrumbsComponent
  ]
})
export class BreadcrumbsModule {

  static forRoot(config: JunteUIModuleConfig = {}): ModuleWithProviders<BreadcrumbsModule> {
    return {
      ngModule: BreadcrumbsModule,
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
