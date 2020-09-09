import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
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
    ResponsiveModule
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
