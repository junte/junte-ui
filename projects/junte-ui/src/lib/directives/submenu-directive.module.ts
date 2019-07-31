import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubMenuDirective, SubMenuItemsDirective } from './sub-menu.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    SubMenuDirective,
    SubMenuItemsDirective
  ],
  declarations: [
    SubMenuDirective,
    SubMenuItemsDirective
  ]
})
export class SubmenuDirectiveModule {
}
