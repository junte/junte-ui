import { AfterContentInit, Component, ContentChildren, HostBinding, Input, QueryList } from '@angular/core';
import { AvatarComponent } from '../avatar.component';
import { UI } from '../../../enum/ui';

@Component({
  selector: 'jnt-avatars-group',
  templateUrl: './avatars-group.encapsulated.html'
})
export class AvatarsGroupComponent implements AfterContentInit {

  ui = UI;

  @HostBinding('attr.host') readonly host = 'jnt-avatars-group-host';

  @HostBinding('attr.name')
  @Input() name: string;

  extra = 4;

  @HostBinding('attr.children')
  get count() {
    return this.items.length > this.extra ? this.extra : this.items.length;
  }

  items: AvatarComponent[] = [];

  @ContentChildren(AvatarComponent)
  avatars: QueryList<AvatarComponent>;

  ngAfterContentInit() {
    this.items = this.avatars.toArray();
    this.avatars.changes.subscribe(items => this.items = items.toArray());
  }

}
