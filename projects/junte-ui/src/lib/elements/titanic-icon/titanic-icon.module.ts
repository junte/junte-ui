import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { JUNTE_MODULE_PROVIDES, JunteUIModuleConfig } from '../../config';
import { TitanicIconComponent } from './titanic-icon.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [
    TitanicIconComponent,
  ],
  entryComponents: [
    TitanicIconComponent
  ],
  exports: [
    TitanicIconComponent
  ]
})
export class TitanicIconModule {

  static forRoot(config: JunteUIModuleConfig = {}): ModuleWithProviders<TitanicIconModule> {
    return {
      ngModule: TitanicIconModule,
      providers: [
        {
          provide: JunteUIModuleConfig,
          useValue: config
        }, ...JUNTE_MODULE_PROVIDES
      ]
    };
  }

}
