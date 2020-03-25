import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { MessageComponent } from './message.component';
import { JUNTE_MODULE_PROVIDES, JunteUIModuleConfig } from '../../config';

@NgModule({
  declarations: [
    MessageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MessageComponent
  ]
})
export class MessageModule {

  static forRoot(config: JunteUIModuleConfig = {}): ModuleWithProviders<MessageModule> {
    return {
      ngModule: MessageModule,
      providers: [
        {
          provide: JunteUIModuleConfig,
          useValue: config
        }, ...JUNTE_MODULE_PROVIDES
      ]
    };
  }

}
