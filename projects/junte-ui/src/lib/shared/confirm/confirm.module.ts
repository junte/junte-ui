import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { JUNTE_MODULE_PROVIDES, JunteUIModuleConfig } from '../../config';
import { JunteDirectiveModule } from '../../core/directives/junte-directive.module';
import { ButtonModule } from '../../forms/button/button.module';
import { FormModule } from '../../forms/form/form.module';
import { StackModule } from '../../layout/stack/stack.module';
import { ConfirmComponent } from './confirm.component';

@NgModule({
  declarations: [
    ConfirmComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    FormModule,
    StackModule,
    JunteDirectiveModule,
    TranslateModule
  ],
  exports: [
    ConfirmComponent
  ]
})
export class ConfirmModule {

  static forRoot(config: JunteUIModuleConfig = {}): ModuleWithProviders<ConfirmModule> {
    return {
      ngModule: ConfirmModule,
      providers: [
        {
          provide: JunteUIModuleConfig,
          useValue: config
        }, ...JUNTE_MODULE_PROVIDES
      ]
    };
  }

}
