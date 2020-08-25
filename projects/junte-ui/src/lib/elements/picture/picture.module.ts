import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { PictureComponent } from './picture.component';
import { JUNTE_MODULE_PROVIDES, JunteUIModuleConfig } from '../../config';
import { StackModule } from '../../layout/stack/stack.module';
import { IconModule } from '../icon/icon.module';

@NgModule({
  imports: [
    CommonModule,
    IconModule,
    StackModule
  ],
  exports: [
    PictureComponent
  ],
  entryComponents: [
    PictureComponent
  ],
  declarations: [
    PictureComponent
  ]
})
export class PictureModule {

  static forRoot(config: JunteUIModuleConfig = {}): ModuleWithProviders<PictureModule> {
    return {
      ngModule: PictureModule,
      providers: [
        {
          provide: JunteUIModuleConfig,
          useValue: config
        }, ...JUNTE_MODULE_PROVIDES
      ]
    };
  }

}
