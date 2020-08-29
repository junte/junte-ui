import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { JUNTE_MODULE_PROVIDES, JunteUIModuleConfig } from '../../config';
import { IconModule } from '../../elements/icon/icon.module';
import { ButtonModule } from '../../forms/button/button.module';
import { PopoverModule } from '../../overlays/popover/popover.module';
import { SpinnerModule } from '../spinner/spinner.module';
import { StackModule } from '../stack/stack.module';
import { CardComponent } from './card.component';

@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    CommonModule,
    IconModule,
    SpinnerModule,
    ButtonModule,
    PopoverModule,
    StackModule
  ],
  entryComponents: [
    CardComponent
  ],
  exports: [
    CardComponent
  ]
})
export class CardModule {

  static forRoot(config: JunteUIModuleConfig = {}): ModuleWithProviders<CardModule> {
    return {
      ngModule: CardModule,
      providers: [
        {
          provide: JunteUIModuleConfig,
          useValue: config
        }, ...JUNTE_MODULE_PROVIDES
      ]
    };
  }

}
