import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SubMenuDirective, SubMenuItemsDirective, SubMenuTitleDirective } from './sub-menu.directive';

@NgModule({
  imports: [
    CommonModule
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
