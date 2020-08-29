import { Component, HostBinding, Input } from '@angular/core';
import { PropertyApi } from '../../core/decorators/api';
import { Fit } from '../../core/enums/fit';
import { Position } from '../../core/enums/position';
import { UI } from '../../core/enums/ui';

@Component({
  selector: 'jnt-picture',
  templateUrl: './picture.encapsulated.html'
})
export class PictureComponent {

  @HostBinding('attr.host') readonly host = 'jnt-picture-host';

  ui = UI;

  _src: string;
  _icon = UI.icons.image;

  @HostBinding('attr.data-fit')
  _fit: Fit = Fit.width;

  @HostBinding('attr.data-position')
  _position: Position = Position.center;

  @PropertyApi({
    description: 'Icon on picture',
    type: 'string',
    default: 'ui.icons.image',
  })
  @Input() set icon(icon: string) {
    this._icon = icon || UI.icons.image;
  }

  get icon() {
    return this._icon;
  }

  @PropertyApi({
    description: 'Path to image on picture',
    type: 'string'
  })
  @HostBinding('style.background-image')
  @Input() set src(src: string) {
    this._src = !!src ? 'url(' + src + ')' : null;
  }

  get src() {
    return this._src;
  }

  @PropertyApi({
    description: 'Picture width',
    type: 'string',
    default: '200px'
  })
  @HostBinding('style.width')
  @Input() width = '200px';

  @PropertyApi({
    description: 'Picture height',
    type: 'string',
    default: '100px'
  })
  @HostBinding('style.height')
  @Input() height = '100px';

  @PropertyApi({
    description: 'Image size in relation to width or height',
    path: 'ui.fit',
    default: Fit.width,
    options: [Fit.width, Fit.height]
  })
  @Input() set fit(fit: Fit) {
    this._fit = fit || Fit.width;
  }

  @PropertyApi({
    description: 'Image position',
    path: 'ui.position',
    default: Position.center,
    options: [Position.center, Position.left, Position.right, Position.bottom, Position.top]
  })
  @Input() set position(position: Position) {
    this._position = position || Position.center;
  }

}
