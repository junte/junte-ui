import { NgModule } from '@angular/core';
import { JunteUiComponent } from './junte-ui.component';
import { CommonModule } from '@angular/common';
import { SelectComponent } from './components/select/select.component';
import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/input/input.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { RadioComponent } from './components/radio/radio.component';
import { CardComponent } from './components/card/card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContainerComponent } from './components/grid/container/container.component';
import { RowComponent } from './components/grid/row/row.component';
import { ColComponent } from './components/grid/col/col.component';
import { IconComponent } from './components/icon/icon.component';
import { StackDirective } from './directives/stack';
import { StackComponent } from './components/stack/stack.component';
import { BlockComponent } from './components/block/block.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SwitchComponent } from './components/switch/switch.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { FormComponent } from './components/form/form.component';
import { StringTemplateOutletDirective } from './directives/string-template-outlet';
import { FormItemComponent } from './components/form/form-item/form-item.component';
import { FormLabelComponent } from './components/form/form-label/form-label.component';
import { FormMessageComponent } from './components/form/form-message/form-message.component';
import { FormControlComponent } from './components/form/form-control/form-control.component';
import { BadgeComponent } from './components/badge/badge.component';
import { AppLayoutComponent } from './components/app-layout/app-layout.component';
import { AppHeaderComponent } from './components/app-layout/app-header/app-header.component';
import { AppMainComponent } from './components/app-layout/app-main/app-main.component';
import { AppAsideComponent } from './components/app-layout/app-aside/app-aside.component';
import { AppContentComponent } from './components/app-layout/app-content/app-content.component';
import { AppFooterComponent } from './components/app-layout/app-footer/app-footer.component';
import { SelectOptionComponent } from './components/select/select-option/select-option.component';
import { TableComponent } from './components/table/table.component';
import { TableColumnComponent } from './components/table/column/table-column.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuItemComponent } from './components/menu/menu-item/menu-item.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { PageSizeComponent } from './components/pagination/page-size/page-size.component';
import { UserbarComponent } from './components/app-layout/app-header/userbar/userbar.component';
import { UserMenuComponent } from './components/menu/user-menu/user-menu.component';
import { LinkComponent } from './components/link/link.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    StringTemplateOutletDirective,
    JunteUiComponent,
    SelectComponent,
    ButtonComponent,
    InputComponent,
    CheckboxComponent,
    RadioComponent,
    CardComponent,
    ContainerComponent,
    RowComponent,
    ColComponent,
    IconComponent,
    StackDirective,
    StackComponent,
    BlockComponent,
    SpinnerComponent,
    SwitchComponent,
    SpinnerComponent,
    PaginationComponent,
    PageSizeComponent,
    FormComponent,
    FormItemComponent,
    FormLabelComponent,
    SelectOptionComponent,
    FormMessageComponent,
    FormControlComponent,
    BadgeComponent,
    AppLayoutComponent,
    AppHeaderComponent,
    AppMainComponent,
    AppAsideComponent,
    AppContentComponent,
    AppFooterComponent,
    TableComponent,
    TableColumnComponent,
    MenuComponent,
    MenuItemComponent,
    AvatarComponent,
    UserbarComponent,
    UserMenuComponent,
    LinkComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    JunteUiComponent,
    SelectComponent,
    ButtonComponent,
    InputComponent,
    CheckboxComponent,
    RadioComponent,
    CardComponent,
    ContainerComponent,
    RowComponent,
    ColComponent,
    IconComponent,
    StackDirective,
    StackComponent,
    BlockComponent,
    PaginationComponent,
    PageSizeComponent,
    SpinnerComponent,
    SwitchComponent,
    SelectOptionComponent,
    FormComponent,
    FormItemComponent,
    FormLabelComponent,
    FormMessageComponent,
    FormControlComponent,
    BadgeComponent,
    AppLayoutComponent,
    AppHeaderComponent,
    AppMainComponent,
    AppAsideComponent,
    AppContentComponent,
    AppFooterComponent,
    TableComponent,
    TableColumnComponent,
    MenuComponent,
    MenuItemComponent,
    AvatarComponent,
    UserbarComponent,
    UserMenuComponent,
    LinkComponent
  ]
})
export class JunteUiModule {
}
