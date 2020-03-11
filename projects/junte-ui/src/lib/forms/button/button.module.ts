import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { JUNTE_MODULE_PROVIDES, JunteUIModuleConfig } from '../../config';
import { AnimationPipeModule } from '../../core/pipes/animation.pipe.module';
import { BadgeModule } from '../../elements/badge/badge.module';
import { IconModule } from '../../elements/icon/icon.module';
import { SpinnerModule } from '../../layout/spinner/spinner.module';
import { StackModule } from '../../layout/stack/stack.module';
import { ButtonComponent } from './button.component';
import { ButtonGroupComponent } from './group/button-group.component';

@NgModule({
  imports: [
    CommonModule,
    AnimationPipeModule,
    BadgeModule,
    IconModule,
    SpinnerModule,
    StackModule
  ],
  declarations: [
    ButtonComponent,
    ButtonGroupComponent,
  ],
  entryComponents: [
    ButtonComponent,
    ButtonGroupComponent
  ],
  exports: [
    ButtonComponent,
    ButtonGroupComponent
  ]
})
export class ButtonModule {

  static forRoot(config: JunteUIModuleConfig = {}): ModuleWithProviders<ButtonModule> {
    return {
      ngModule: ButtonModule,
      providers: [
        {
          provide: JunteUIModuleConfig,
          useValue: config
        }, ...JUNTE_MODULE_PROVIDES
      ]
    };
  }

}
