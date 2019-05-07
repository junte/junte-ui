import { AfterContentInit, ContentChildren, HostBinding, Input, QueryList } from '@angular/core';
import { AvatarComponent } from './avatar.component';
import { Sizes, UI } from '../../enum/ui';

export abstract class Avatar implements AfterContentInit {

  ui = UI;

  @HostBinding('attr.children')
  get count() {
    return this.items.length;
  }

  @HostBinding('attr.size')
  @Input()
  size: Sizes = Sizes.tiny;

  items: AvatarComponent[] = [];

  @ContentChildren(AvatarComponent)
  avatarItems: QueryList<AvatarComponent>;

  ngAfterContentInit() {
    this.items = this.avatarItems.toArray();
    this.avatarItems.changes.subscribe(items => this.items = items.toArray());
  }
}
