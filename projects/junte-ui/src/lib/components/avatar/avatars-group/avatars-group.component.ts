import { AfterContentInit, Component, ContentChildren, HostBinding, QueryList } from '@angular/core';
import { AvatarComponent } from '../avatar.component';
import { UI } from '../../../enum/ui';

@Component({
  selector: 'jnt-avatars-group',
  templateUrl: './avatars-group.component.html',
  styleUrls: ['./avatars-group.component.scss']
})
export class AvatarsGroupComponent implements AfterContentInit {

  ui = UI;

  @HostBinding('attr.host') readonly host = 'jnt-avatars-group-host';

  items: AvatarComponent[] = [];

  @ContentChildren(AvatarComponent)
  avatars: QueryList<AvatarComponent>;

  ngAfterContentInit() {
    this.items = this.avatars.toArray();
    this.avatars.changes.subscribe(items => this.items = items.toArray());
  }

}
