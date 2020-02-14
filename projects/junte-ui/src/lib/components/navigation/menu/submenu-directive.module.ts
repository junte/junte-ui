import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LinkModule } from '../link/link.module';
import { SubMenuDirective, SubMenuItemsDirective, SubMenuTitleDirective } from './sub-menu.directive';

@NgModule({
  imports: [
    CommonModule,
    LinkModule
  ],
  exports: [
    SubMenuDirective,
    SubMenuItemsDirective,
    SubMenuTitleDirective
  ],
  declarations: [
    SubMenuDirective,
    SubMenuItemsDirective,
    SubMenuTitleDirective
  ]
})
export class SubmenuDirectiveModule {
}
