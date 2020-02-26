import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { I18nLoaderFactory, JunteUIModuleConfig } from '../../../config';
import { IconModule } from '../../elements/icon/icon.module';
import { StackModule } from '../../layout/stack/stack.module';
import { ThemeSwitcherComponent } from './theme-switcher.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StackModule,
    IconModule
  ],
  exports: [
    ThemeSwitcherComponent
  ],
  declarations: [
    ThemeSwitcherComponent
  ]
})
export class ThemeSwitcherModule {

  static forRoot(config: JunteUIModuleConfig = {}): ModuleWithProviders<ThemeSwitcherModule> {
    return {
      ngModule: ThemeSwitcherModule,
      providers: [
        {
          provide: JunteUIModuleConfig,
          useValue: config
        },
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: I18nLoaderFactory,
            deps: [JunteUIModuleConfig]
          },
          defaultLanguage: 'en'
        }).providers
      ]
    };
  }

}
