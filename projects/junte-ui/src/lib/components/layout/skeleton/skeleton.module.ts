import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { JunteDirectiveModule } from '../../../directives/junte-directive.module';
import { ArrayPipeModule } from '../../../pipes/array-pipe.module';
import { StackModule } from '../stack/stack.module';
import { SkeletonComponent } from './skeleton.component';
import { JunteUIModuleConfig } from '../../../config';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { I18nLoader } from '../../../i18n/loader';
import { en } from '../../../i18n/en';

@NgModule({
  imports: [
    CommonModule,
    JunteDirectiveModule,
    StackModule,
    ArrayPipeModule
  ],
  declarations: [
    SkeletonComponent
  ],
  entryComponents: [
    SkeletonComponent
  ],
  exports: [
    SkeletonComponent
  ]
})
export class SkeletonModule {

  static forRoot(config: JunteUIModuleConfig = {}): ModuleWithProviders<SkeletonModule> {
    return {
      ngModule: SkeletonModule,
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
