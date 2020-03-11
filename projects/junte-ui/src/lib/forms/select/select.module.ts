import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { I18nLoaderFactory, JUNTE_MODULE_PROVIDES, JunteUIModuleConfig } from '../../config';
import { JunteDirectiveModule } from '../../core/directives/junte-directive.module';
import { en } from '../../core/i18n/en';
import { ArrayPipeModule } from '../../core/pipes/array.pipe.module';
import { IconModule } from '../../elements/icon/icon.module';
import { SkeletonModule } from '../../layout/skeleton/skeleton.module';
import { SpinnerModule } from '../../layout/spinner/spinner.module';
import { StackModule } from '../../layout/stack/stack.module';
import { ButtonModule } from '../button/button.module';
import { GetOptionPipe, GetOptionsPipe } from './pipes';
import { SelectComponent, SelectOptionComponent } from './select.component';

@NgModule({
  declarations: [
    SelectComponent,
    SelectOptionComponent,
    GetOptionsPipe,
    GetOptionPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IconModule,
    SpinnerModule,
    SkeletonModule,
    JunteDirectiveModule,
    ButtonModule,
    ArrayPipeModule,
    StackModule
  ],
  entryComponents: [SelectComponent],
  exports: [
    SelectComponent,
    SelectOptionComponent
  ]
})
export class SelectModule {

  static forRoot(config: JunteUIModuleConfig = {}): ModuleWithProviders<SelectModule> {
    return {
      ngModule: SelectModule,
      providers: [
        {
          provide: JunteUIModuleConfig,
          useValue: config
        }, ...JUNTE_MODULE_PROVIDES
      ]
    };
  }

}
