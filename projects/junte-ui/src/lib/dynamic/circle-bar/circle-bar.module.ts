import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { JUNTE_MODULE_PROVIDES, JunteUIModuleConfig } from '../../config';
import { SanitizePipeModule } from '../../core/pipes/sanitize.pipe.module';
import { CircleBarComponent } from './circle-bar.component';
import { BarIndicatorGroupComponent } from './indicator-group/indicator-group.component';
import { BarIndicatorComponent } from './indicator/indicator.component';
import { SumPipe } from './pipes';

@NgModule({
  imports: [
    CommonModule,
    SanitizePipeModule
  ],
  declarations: [
    CircleBarComponent,
    BarIndicatorComponent,
    BarIndicatorGroupComponent,
    SumPipe
  ],
  entryComponents: [
    CircleBarComponent,
    BarIndicatorComponent
  ],
  exports: [
    CircleBarComponent,
    BarIndicatorComponent,
    BarIndicatorGroupComponent,
    SumPipe
  ]
})
export class CircleBarModule {

  static forRoot(config: JunteUIModuleConfig = {}): ModuleWithProviders<CircleBarModule> {
    return {
      ngModule: CircleBarModule,
      providers: [
        {
          provide: JunteUIModuleConfig,
          useValue: config
        }, ...JUNTE_MODULE_PROVIDES
      ]
    };
  }

}
