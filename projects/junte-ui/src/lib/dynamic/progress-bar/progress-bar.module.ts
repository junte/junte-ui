import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { JUNTE_MODULE_PROVIDES, JunteUIModuleConfig } from '../../config';
import { ProgressBarComponent } from './progress-bar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ProgressBarComponent
  ],
  entryComponents: [
    ProgressBarComponent
  ],
  declarations: [
    ProgressBarComponent
  ]
})
export class ProgressBarModule {

  static forRoot(config: JunteUIModuleConfig = {}): ModuleWithProviders<ProgressBarModule> {
    return {
      ngModule: ProgressBarModule,
      providers: [
        {
          provide: JunteUIModuleConfig,
          useValue: config
        }, ...JUNTE_MODULE_PROVIDES
      ]
    };
  }

}
