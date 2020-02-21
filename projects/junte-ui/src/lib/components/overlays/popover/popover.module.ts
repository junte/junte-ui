import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { I18nLoaderFactory, JunteUIModuleConfig } from '../../../config';
import { JunteDirectiveModule } from '../../../directives/junte-directive.module';
import { en } from '../../../i18n/en';
import { PopoverComponent } from './popover.component';
import { PopoverDirective } from './popover.directive';

@NgModule({
  declarations: [
    PopoverComponent,
    PopoverDirective
  ],
  imports: [
    CommonModule,
    JunteDirectiveModule
  ],
  entryComponents: [
    PopoverComponent
  ],
  exports: [
    PopoverComponent,
    PopoverDirective
  ]
})
export class PopoverModule {

  static forRoot(config: JunteUIModuleConfig = {}): ModuleWithProviders<PopoverModule> {
    return {
      ngModule: PopoverModule,
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
