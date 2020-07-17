import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { PopoverModule } from '../../overlays/popover/popover.module';
import { GridModule } from '../grid/grid.module';
import { IconModule } from '../../elements/icon/icon.module';
import { ResponsiveModule } from '../responsive/responsive.module';
import { MenuModule } from '../../navigation/menu/menu.module';
import { LpHeaderComponent } from './header/lp-header.component';
import { JUNTE_MODULE_PROVIDES, JunteUIModuleConfig } from '../../config';
import { ButtonModule } from '../../forms/button/button.module';
import { StackModule } from '../stack/stack.module';
import { LpLayoutComponent } from './layout/lp-layout.component';
import { LpRewindComponent } from './rewind/lp-rewind.component';
import { LpSlideComponent } from './slide/lp-slide.component';

@NgModule({
  imports: [
    CommonModule,
    StackModule,
    ButtonModule,
    MenuModule,
    ResponsiveModule,
    IconModule,
    GridModule,
    PopoverModule
  ],
  declarations: [
    LpLayoutComponent,
    LpRewindComponent,
    LpSlideComponent,
    LpHeaderComponent
  ],
  exports: [
    LpLayoutComponent,
    LpRewindComponent,
    LpSlideComponent,
    LpHeaderComponent
  ]
})
export class LpModule {

  static forRoot(config: JunteUIModuleConfig = {}): ModuleWithProviders<LpModule> {
    return {
      ngModule: LpModule,
      providers: [
        {
          provide: JunteUIModuleConfig,
          useValue: config
        }, ...JUNTE_MODULE_PROVIDES
      ]
    };
  }

}
