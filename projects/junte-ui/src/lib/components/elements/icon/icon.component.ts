import { Component, HostBinding, Input } from '@angular/core';
import { PropertyApi } from '../../../decorators/api';
import { Sizes } from 'projects/junte-ui/src/lib/enums/ui';
import { FontIcons, TypeIcon } from '../../../enums/ui';

const DEFAULT_ICONSET = 'junte-ui-icons-default';

@Component({
  selector: 'jnt-icon',
  templateUrl: './icon.encapsulated.html',
  styleUrls: ['./icon.encapsulated.scss']
})
export class IconComponent {

  @HostBinding('attr.host') readonly host = 'jnt-icon-host';
  private _icon: string = FontIcons.check;
  typeIcon = TypeIcon;

  @PropertyApi({
    description: 'Icon size',
    path: 'ui.sizes',
    default: Sizes.normal,
    options: [Sizes.tiny, Sizes.small, Sizes.normal, Sizes.large]
  })

  @HostBinding('attr.size')
  @Input()
  size: Sizes;

  @HostBinding('attr.type')
  type: TypeIcon = TypeIcon.font;
  iconset: string = DEFAULT_ICONSET;

  @PropertyApi({
    description: 'Icon',
    path: 'ui.icons'
  })

  @HostBinding('attr.icon')
  @Input()
  set icon(icon: string) {
    const chunks = icon.split(':');
    this._icon = chunks[0];

    if (chunks.length > 1) {
      this.type = TypeIcon[chunks[1]];
    }

    if (chunks.length > 2) {
      this.iconset = chunks[2];
    }
  }

  get icon() {
    return this._icon;
  }

}
