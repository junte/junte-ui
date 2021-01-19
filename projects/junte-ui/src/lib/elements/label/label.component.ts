import { Component, ContentChild, HostBinding, Input } from '@angular/core';
import { Outline } from '../../core/enums/outline';
import { PropertyApi } from '../../core/decorators/api';
import { Color } from '../../core/enums/color';
import { Size } from '../../core/enums/size';
import { UI } from '../../core/enums/ui';
import { DotComponent } from '../dot/dot.component';

@Component({
  selector: 'jnt-label',
  templateUrl: './label.encapsulated.html'
})
export class LabelComponent {

  @HostBinding('attr.host') readonly host = 'jnt-label-host';

  ui = UI;

  @HostBinding('style.background-color')
  @HostBinding('style.border-color')
  @HostBinding('attr.data-color')
  _color: string = Color.primary;

  @HostBinding('attr.data-size')
  _size: Size = Size.normal;

  @HostBinding('attr.data-outline')
  _outline: Outline = Outline.fill;

  @PropertyApi({
    description: 'Label text',
    type: 'string',
  })
  @Input() label: string;

  @PropertyApi({
    description: 'Label icon',
    type: 'string',
  })
  @Input() icon: string;

  @PropertyApi({
    description: 'Label background color',
    type: 'string',
    default: 'purple'
  })
  @Input() set color(color: string) {
    this._color = color || Color.primary;
  }

  get color() {
    return this._color;
  }

  @PropertyApi({
    description: 'Label size',
    path: 'ui.size',
    default: Size.normal,
    options: [Size.small, Size.normal]
  })
  @Input() set size(size: Size) {
    this._size = size || Size.normal;
  }

  @PropertyApi({
    description: 'Label outline',
    path: 'ui.outline',
    default: Outline.fill,
    options: [Outline.ghost, Outline.fill]
  })
  @Input() set outline(outline: Outline) {
    this._outline = outline || Outline.fill;
  }

  get outline() {
    return this._outline;
  }

  @ContentChild(DotComponent)
  dot: DotComponent;
}
