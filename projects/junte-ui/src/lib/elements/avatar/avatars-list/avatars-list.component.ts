import { Component, ContentChildren, HostBinding, Input, QueryList } from '@angular/core';
import { Size } from '../../../core/enums/size';
import { UI } from '../../../core/enums/ui';
import { AvatarComponent } from '../avatar.component';
import { PropertyApi } from '../../../core/decorators/api';

const MAX_CAPACITY = 5;

@Component({
  selector: 'jnt-avatars-list',
  templateUrl: './avatars-list.encapsulated.html'
})
export class AvatarsListComponent {

  @HostBinding('attr.host') readonly host = 'jnt-avatars-list-host';

  @HostBinding('attr.size')
  _size: Size;

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

}
