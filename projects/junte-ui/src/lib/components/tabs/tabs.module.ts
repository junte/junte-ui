import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs.component';
import { TabComponent } from './tab/tab.component';
import { IconModule } from '../icon/icon.module';

@NgModule({
  imports: [
    CommonModule,
    IconModule
  ],
  declarations: [
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
