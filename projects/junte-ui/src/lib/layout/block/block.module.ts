import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { JUNTE_MODULE_PROVIDES, JunteUIModuleConfig } from '../../config';
import { IconModule } from '../../elements/icon/icon.module';
import { SpinnerModule } from '../spinner/spinner.module';
import { BlockComponent } from './block.component';

@NgModule({
  declarations: [
    BlockComponent
  ],
  imports: [
    CommonModule,
    IconModule,
    SpinnerModule
  ],
  entryComponents: [
    BlockComponent
  ],
  exports: [
    BlockComponent
  ]
})
export class BlockModule {

  static forRoot(config: JunteUIModuleConfig = {}): ModuleWithProviders<BlockModule> {
    return {
      ngModule: BlockModule,
      providers: [
        {
          provide: JunteUIModuleConfig,
          useValue: config
        }, ...JUNTE_MODULE_PROVIDES
      ]
    };
  }

}
