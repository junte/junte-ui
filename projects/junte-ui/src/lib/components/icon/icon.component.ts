import {Component, HostBinding, Input} from '@angular/core';
import {FontIcons, TypeIcon} from '../../enum/ui';

const DEFAULT_ICONSET = 'icons';

@Component({
  selector: 'jnt-icon',
  templateUrl: './icon.encapsulated.html',
  styleUrls: ['./icon.encapsulated.scss']
})
export class IconComponent {

  @HostBinding('attr.host') readonly host = 'jnt-icon-host';

  private _icon: string = FontIcons.check;
  typeIcon = TypeIcon;

  @HostBinding('attr.type')
  type: TypeIcon = TypeIcon.font;
  iconset: string = DEFAULT_ICONSET;

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
