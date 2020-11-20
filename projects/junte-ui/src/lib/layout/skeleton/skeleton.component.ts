import { Component, HostBinding, Input } from '@angular/core';
import { PropertyApi } from '../../core/decorators/api';
import { Size } from '../../core/enums/size';
import { UI } from '../../core/enums/ui';
import { SkeletonType } from './enums';

@Component({
  selector: 'jnt-skeleton',
  templateUrl: './skeleton.encapsulated.html'
})
export class SkeletonComponent {

  ui = UI;

  private _type = SkeletonType.text;

  @HostBinding('attr.host') readonly host = 'jnt-skeleton-host';

  @HostBinding('attr.data-size')
  _size = Size.normal;

  @PropertyApi({
    description: 'Skeleton type',
    path: 'ui.skeleton.type',
    default: SkeletonType.text,
    options: [SkeletonType.text,
      SkeletonType.card,
      SkeletonType.avatar,
      SkeletonType.image]
  })

  @HostBinding('attr.data-type')
  @Input() set type(type: SkeletonType) {
    this._type = type || SkeletonType.text;
  }

  get type() {
    return this._type;
  }

  @PropertyApi({
    description: 'Avatar/image size',
    path: 'ui.size',
    default: Size.normal,
    options: [Size.tiny, Size.small, Size.normal, Size.large]
  })

  @Input() set size(size: Size) {
    this._size = size || Size.normal;
  }

  @PropertyApi({
    description: 'Count of text lines',
    type: 'number',
    default: '1'
  })

  @Input() lines = 1;

  @PropertyApi({
    description: 'Switch on/off animation',
    type: 'boolean',
    default: 'true'
  })

  @HostBinding('attr.data-animated')
  @Input() animated = true;

}
