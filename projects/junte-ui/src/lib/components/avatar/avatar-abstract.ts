import { AfterContentInit, ContentChildren, Input, QueryList } from '@angular/core';
import { MenuType, Sizes, UI } from '../../enum/ui';
import { AvatarComponent } from './avatar.component';

export abstract class Avatar implements AfterContentInit {
  //
  // @Input() type: MenuType = MenuType.horizontal;
  // @Input() spacer: Sizes = Sizes.large;

  ui = UI;

  items: AvatarComponent[] = [];

  @ContentChildren(AvatarComponent)
  avatarItems: QueryList<AvatarComponent>;

  ngAfterContentInit() {
    this.items = this.avatarItems.toArray();
    this.avatarItems.changes.subscribe(items => this.items = items.toArray());
  }
}
