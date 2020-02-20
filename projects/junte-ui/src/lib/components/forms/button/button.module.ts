import { ModuleWithProviders, NgModule } from '@angular/core';
import { StackModule } from '../../layout/stack/stack.module';
import { ButtonComponent } from './button.component';
import { CommonModule } from '@angular/common';
import { BadgeModule } from '../../elements/badge/badge.module';
import { IconModule } from '../../elements/icon/icon.module';
import { AnimationPipeModule } from '../../../pipes/animation-pipe.module';
import { SpinnerModule } from '../../layout/spinner/spinner.module';
import { ButtonGroupComponent } from './group/button-group.component';
import { JunteUIModuleConfig } from '../../../config';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { I18nLoader } from '../../../i18n/loader';
import { en } from '../../../i18n/en';

@NgModule({
  imports: [
    CommonModule,
    AnimationPipeModule,
    BadgeModule,
    IconModule,
    SpinnerModule,
    StackModule
  ],
  declarations: [
    ButtonComponent,
    ButtonGroupComponent,
  ],
  entryComponents: [
    ButtonComponent,
    ButtonGroupComponent
  ],
  exports: [
    ButtonComponent,
    ButtonGroupComponent
  ]
})
export class ButtonModule {

  static forRoot(config: JunteUIModuleConfig = {}): ModuleWithProviders<ButtonModule> {
    return {
      ngModule: ButtonModule,
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
