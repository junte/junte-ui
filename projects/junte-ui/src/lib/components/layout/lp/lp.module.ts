import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { ButtonModule } from '../../forms/button/button.module';
import { StackModule } from '../stack/stack.module';
import { LpLayoutComponent } from './layout/lp-layout.component';
import { LpRewindComponent } from './rewind/lp-rewind.component';
import { LpSlideComponent } from './slide/lp-slide.component';
import { JunteUIModuleConfig } from '../../../config';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { I18nLoader } from '../../../i18n/loader';
import { en } from '../../../i18n/en';

@NgModule({
  imports: [
    CommonModule,
    StackModule,
    ButtonModule
  ],
  declarations: [
    LpLayoutComponent,
    LpRewindComponent,
    LpSlideComponent
  ],
  exports: [
    LpLayoutComponent,
    LpRewindComponent,
    LpSlideComponent
  ]
})
export class LpModule {

  static forRoot(config: JunteUIModuleConfig = {}): ModuleWithProviders<LpModule> {
    return {
      ngModule: LpModule,
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
