import { Component, ContentChildren, HostBinding, Input, QueryList } from '@angular/core';
import { Sizes, UI } from '../../../../enums/ui';
import { AvatarComponent } from '../avatar.component';
import { PropertyApi } from '../../../../decorators/api';

const MAX_CAPACITY = 5;

@Component({
  selector: 'jnt-avatars-list',
  templateUrl: './avatars-list.encapsulated.html'
})
export class AvatarsListComponent {

  @HostBinding('attr.host') readonly host = 'jnt-avatars-list-host';

  @HostBinding('attr.size')
  _size: Sizes;

  ui = UI;
  max = MAX_CAPACITY;

  @ContentChildren(AvatarComponent)
  avatars: QueryList<AvatarComponent>;

  @HostBinding('attr.capacity')
  get capacity() {
    return Math.min(this.avatars.length, MAX_CAPACITY);
  }

  @PropertyApi({
    description: 'Avatars list size',
    path: 'ui.sizes',
    default: Sizes.normal,
    options: [Sizes.tiny, Sizes.small, Sizes.normal, Sizes.large]
  })

  @Input() set size(size: Sizes) {
    this._size = size || Sizes.normal;
  }

  get size() {
    return this._size;
  }

}
