import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { JUNTE_MODULE_PROVIDES, JunteUIModuleConfig } from '../../config';
import { IconModule } from '../../elements/icon/icon.module';
import { ButtonModule } from '../../forms/button/button.module';
import { BlockModule } from '../../layout/block/block.module';
import { StackModule } from '../../layout/stack/stack.module';
import { ModalComponent } from './modal.component';

@NgModule({
  declarations: [
    ModalComponent
  ],
  imports: [
    CommonModule,
    BlockModule,
    ButtonModule,
    StackModule,
    IconModule
  ],
  entryComponents: [
    ModalComponent
  ],
  exports: [
    ModalComponent
  ]
})
export class ModalModule {

  static forRoot(config: JunteUIModuleConfig = {}): ModuleWithProviders<ModalModule> {
    return {
      ngModule: ModalModule,
      providers: [
        {
          provide: JunteUIModuleConfig,
          useValue: config
        }, ...JUNTE_MODULE_PROVIDES
      ]
    };
  }

}
