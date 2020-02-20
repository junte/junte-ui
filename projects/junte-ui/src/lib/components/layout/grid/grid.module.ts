import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { ColComponent } from './col/col.component';
import { ContainerComponent } from './container/container.component';
import { RowComponent } from './row/row.component';
import { JunteUIModuleConfig } from '../../../config';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { I18nLoader } from '../../../i18n/loader';
import { en } from '../../../i18n/en';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ContainerComponent,
    RowComponent,
    ColComponent
  ],
  entryComponents: [
    ContainerComponent,
    RowComponent,
    ColComponent
  ],
  exports: [
    ContainerComponent,
    RowComponent,
    ColComponent
  ]
})
export class GridModule {

  static forRoot(config: JunteUIModuleConfig = {}): ModuleWithProviders<GridModule> {
    return {
      ngModule: GridModule,
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
