import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoggerModule } from 'ngx-logger';
import { LpFooterComponent } from './footer/lp-footer.component';
import { IconModule } from '../../elements/icon/icon.module';
import { ButtonModule } from '../../forms/button/button.module';
import { MenuModule } from '../../navigation/menu/menu.module';
import { PopoverModule } from '../../overlays/popover/popover.module';
import { GridModule } from '../grid/grid.module';
import { ResponsiveModule } from '../responsive/responsive.module';
import { StackModule } from '../stack/stack.module';
import { LpHeaderComponent } from './header/lp-header.component';
import { LpLayoutComponent } from './layout/lp-layout.component';
import { LpRewindComponent } from './rewind/lp-rewind.component';
import { LpSlideComponent } from './slide/lp-slide.component';

@NgModule({
  imports: [
    CommonModule,
    LoggerModule.forChild(),
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
    LpHeaderComponent,
    LpFooterComponent
  ],
  exports: [
    LpLayoutComponent,
    LpRewindComponent,
    LpSlideComponent,
    LpHeaderComponent,
    LpFooterComponent
  ]
})
export class LpModule {
}
