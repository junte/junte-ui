import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconModule } from '../../elements/icon/icon.module';
import { TabComponent } from './tab.component';
import { TabsComponent } from './tabs.component';
import { StackModule } from '../../layout/stack/stack.module';
import { BadgeModule } from '../../elements/badge/badge.module';

@NgModule({
  imports: [
    CommonModule,
    IconModule,
    StackModule,
    BadgeModule
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
