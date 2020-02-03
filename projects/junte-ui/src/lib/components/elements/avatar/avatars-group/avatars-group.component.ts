import { Component, ContentChildren, HostBinding, Input, QueryList } from '@angular/core';
import { Shape } from '../../../../enums/shape';
import { Size } from '../../../../enums/size';
import { UI } from '../../../../enums/ui';
import { AvatarComponent } from '../avatar.component';
import { PropertyApi } from '../../../../decorators/api';

const MAX_CAPACITY = 4;

@Component({
  selector: 'jnt-avatars-group',
  templateUrl: './avatars-group.encapsulated.html'
})
export class AvatarsGroupComponent {

  @HostBinding('attr.host') readonly host = 'jnt-avatars-group-host';

  shape = Shape;

  @HostBinding('attr.size')
  _size: Size = Size.normal;

  ui = UI;
  max = MAX_CAPACITY;

  @PropertyApi({
    description: 'Avatars group size',
    path: 'ui.size',
    default: Size.normal,
    options: [Size.tiny, Size.small, Size.normal, Size.large]
  })

  @Input() set size(size: Size) {
    this._size = size || Size.normal;
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
