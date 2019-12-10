import { Component, HostBinding, Input } from '@angular/core';
import { api } from '../../../decorators/api';
import { Sizes, TypeSkeleton, UI } from '../../../enum/ui';

@Component({
  selector: 'jnt-skeleton',
  templateUrl: './skeleton.encapsulated.html'
})
export class SkeletonComponent {

  private _type = TypeSkeleton.text;

  ui = UI;

  @HostBinding('attr.host') readonly host = 'jnt-skeleton-host';

  @HostBinding('attr.size')
  _size = Sizes.normal;

  @api({
    description: 'Skeleton type: text, avatar',
    path: 'ui.skeleton.type',
    default: TypeSkeleton.text,
    options: [TypeSkeleton.text, TypeSkeleton.avatar]
  })

  @HostBinding('attr.type')
  @Input() set type(type: TypeSkeleton) {
    if (!!type) {
      this._type = type;
    } else {
      this._type = TypeSkeleton.text;
    }
  }

  get type() {
    return this._type;
  }

  @api({
    description: 'Avatar size',
    path: 'ui.sizes',
    default: Sizes.normal,
    options: [Sizes.tiny, Sizes.small, Sizes.normal, Sizes.large]
  })

  @Input() set size(size: Sizes) {
    if (!!size) {
      this._size = size;
    } else {
      this._size = Sizes.normal;
    }
  }

  @api({
    description: 'Count of text lines',
    type: 'number',
    default: '1'
  })

  @HostBinding('attr.lines')
  @Input() lines = 1;

  @api({
    description: 'Switch on/off skeleton animation',
    type: 'boolean',
    default: 'true'
  })

  @HostBinding('attr.animated')
  @Input() animated = true;

}
