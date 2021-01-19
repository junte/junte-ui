import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ArrayPipesModule } from '../../core/pipes/array-pipes.module';
import { BadgeModule } from '../../elements/badge/badge.module';
import { IconModule } from '../../elements/icon/icon.module';
import { ResponsiveModule } from '../../layout/responsive/responsive.module';
import { StackModule } from '../../layout/stack/stack.module';
import { TabComponent } from './tab.component';
import { TabsComponent } from './tabs.component';

@NgModule({
  imports: [
    CommonModule,
    IconModule,
    StackModule,
    BadgeModule,
    ResponsiveModule,
    ArrayPipesModule
  ],
  declarations: [
    TabsComponent,
    TabComponent
  ],
  entryComponents: [
    TabsComponent,
    TabComponent
  ],
  exports: [
    TabsComponent,
    TabComponent
  ]
})
export class TabsModule {
}
