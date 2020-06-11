import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { ButtonModule } from '../../forms/button/button.module';
import { DropdownModule } from '../../navigation/dropdown/dropdown.module';
import { SpinnerModule } from '../spinner/spinner.module';
import { IconModule } from '../../elements/icon/icon.module';
import { CardComponent } from './card.component';
import { JUNTE_MODULE_PROVIDES, JunteUIModuleConfig } from '../../config';

@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    CommonModule,
    IconModule,
    SpinnerModule,
    DropdownModule,
    ButtonModule
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
