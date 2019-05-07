import { AfterContentInit, ContentChildren, QueryList } from '@angular/core';
import { AvatarComponent } from './avatar.component';
import { UI } from '../../enum/ui';

export abstract class Avatar implements AfterContentInit {

  ui = UI;

  items: AvatarComponent[] = [];

  @ContentChildren(AvatarComponent)
  avatarItems: QueryList<AvatarComponent>;

  ngAfterContentInit() {
    this.items = this.avatarItems.toArray();
    this.avatarItems.changes.subscribe(items => this.items = items.toArray());
    console.log(this.items);
  }
}
