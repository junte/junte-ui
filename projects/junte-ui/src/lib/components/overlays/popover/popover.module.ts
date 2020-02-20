import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { JunteDirectiveModule } from '../../../directives/junte-directive.module';
import { PopoverComponent } from './popover.component';
import { PopoverDirective } from './popover.directive';
import { JunteUIModuleConfig } from '../../../config';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { I18nLoader } from '../../../i18n/loader';
import { en } from '../../../i18n/en';

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
