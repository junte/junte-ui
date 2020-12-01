import { Component, ContentChildren, HostBinding, Input, QueryList } from '@angular/core';
import { PropertyApi } from '../../../../core/decorators/api';
import { Gutter } from '../../../../core/enums/gutter';
import { UI } from '../../../../core/enums/ui';
import { AppHeaderActionComponent } from '../action/app-header-action.component';

@Component({
  selector: 'jnt-app-header-actions',
  templateUrl: './app-header-actions.encapsulated.html'
})
export class AppHeaderActionsComponent {

  private _gutter: Gutter = Gutter.tiny;

  ui = UI;

  @HostBinding('attr.host') readonly host = 'jnt-app-header-actions-host';

  @PropertyApi({
    description: 'Elements gutter',
    path: 'ui.gutter',
    default: Gutter.tiny,
    options: [Gutter.tiny,
      Gutter.small,
      Gutter.normal,
      Gutter.large,
      Gutter.big,
      Gutter.huge]
  })
  @Input() set gutter(gutter: Gutter) {
    this._gutter = gutter || Gutter.tiny;
  }

  get gutter() {
    return this._gutter;
  }

  @ContentChildren(AppHeaderActionComponent)
  actions: QueryList<AppHeaderActionComponent>;
}
