import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginationComponent } from './pagination.component';
import { PageSizeComponent } from './page-size/page-size.component';
import { IconModule } from '../../elements/icon/icon.module';
import { StackModule } from '../../layout/stack/stack.module';
import { SelectModule } from '../../forms/select/select.module';
import { JunteUIModuleConfig } from '../../../config';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { I18nLoader } from '../../../i18n/loader';
import { en } from '../../../i18n/en';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IconModule,
    StackModule,
    SelectModule
  ],
  declarations: [
    PaginationComponent,
    PageSizeComponent
  ],
  entryComponents: [
    PaginationComponent
  ],
  exports: [
    PaginationComponent,
    PageSizeComponent
  ]
})
export class PaginationModule {

  static forRoot(config: JunteUIModuleConfig = {}): ModuleWithProviders<PaginationModule> {
    return {
      ngModule: PaginationModule,
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
