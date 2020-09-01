import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { JUNTE_MODULE_PROVIDES, JunteUIModuleConfig } from '../../config';
import { TimerComponent } from './timer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    TimerComponent
  ],
  entryComponents: [
    TimerComponent
  ],
  declarations: [
    TimerComponent
  ]
})
export class TimerModule {

  static forRoot(config: JunteUIModuleConfig = {}): ModuleWithProviders<TimerModule> {
    return {
      ngModule: TimerModule,
      providers: [
        {
          provide: JunteUIModuleConfig,
          useValue: config
        }, ...JUNTE_MODULE_PROVIDES
      ]
    };
  }

}
