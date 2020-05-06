import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { JUNTE_MODULE_PROVIDES, JunteUIModuleConfig } from '../../config';
import { PopoverComponent } from './popover.component';
import { PopoverDirective } from './popover.directive';

@NgModule({
  declarations: [
    PopoverComponent,
    PopoverDirective
  ],
  imports: [
    CommonModule
  ],
  entryComponents: [
    PopoverComponent
  ],
  exports: [
    PopoverComponent,
    PopoverDirective
  ]
})
export class PopoverModule {

  static forRoot(config: JunteUIModuleConfig = {}): ModuleWithProviders<PopoverModule> {
    return {
      ngModule: PopoverModule,
      providers: [
        {
          provide: JunteUIModuleConfig,
          useValue: config
        }, ...JUNTE_MODULE_PROVIDES
      ]
    };
  }

}
