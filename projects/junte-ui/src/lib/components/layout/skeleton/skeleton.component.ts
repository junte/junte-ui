import { Component, HostBinding, Input } from '@angular/core';
import { PropertyApi } from '../../../decorators/api';
import { Sizes, TypeSkeleton } from '../../../enums/ui';

@Component({
  selector: 'jnt-skeleton',
  templateUrl: './skeleton.encapsulated.html'
})
export class SkeletonComponent {

  private _type = TypeSkeleton.text;

  skeletonType = TypeSkeleton;

  @HostBinding('attr.host') readonly host = 'jnt-skeleton-host';

  @HostBinding('attr.size')
  _size = Sizes.normal;

  @PropertyApi({
    description: 'Skeleton type: text, avatar, image',
    path: 'ui.skeleton.type',
    default: TypeSkeleton.text,
    options: [TypeSkeleton.text, TypeSkeleton.avatar, TypeSkeleton.image]
  })

  @HostBinding('attr.type')
  @Input() set type(type: TypeSkeleton) {
    this._type = type || TypeSkeleton.text;
  }

  get type() {
    return this._type;
  }

  @PropertyApi({
    description: 'Avatar/image size',
    path: 'ui.sizes',
    default: Sizes.normal,
    options: [Sizes.tiny, Sizes.small, Sizes.normal, Sizes.large]
  })

  @Input() set size(size: Sizes) {
    this._size = size || Sizes.normal;
  }

  @PropertyApi({
    description: 'Count of text lines',
    type: 'number',
    default: '1'
  })

  @HostBinding('attr.lines')
  @Input() lines = 1;

  @PropertyApi({
    description: 'Switch on/off skeleton animation',
    type: 'boolean',
    default: 'true'
  })

  @HostBinding('attr.animated')
  @Input() animated = true;

}
