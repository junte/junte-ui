import { Component, ContentChildren, HostBinding, Input, QueryList } from '@angular/core';
import { Shapes, Sizes, UI } from '../../../../enum/ui';
import { AvatarComponent } from '../avatar.component';
import { PropertyApi } from '../../../../decorators/api';

const MAX_CAPACITY = 4;

@Component({
  selector: 'jnt-avatars-group',
  templateUrl: './avatars-group.encapsulated.html'
})
export class AvatarsGroupComponent {

  @HostBinding('attr.host') readonly host = 'jnt-avatars-group-host';

  shape = Shapes;

  @HostBinding('attr.size')
  _size: Sizes = Sizes.normal;

  ui = UI;
  max = MAX_CAPACITY;

  @PropertyApi({
    description: 'Avatars group size',
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

  @ContentChildren(AvatarComponent)
  avatars: QueryList<AvatarComponent>;

  @HostBinding('attr.capacity')
  get capacity() {
    return Math.min(this.avatars.length, MAX_CAPACITY);
  }
}
