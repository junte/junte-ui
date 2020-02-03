import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ContentChildren, HostBinding, Input, QueryList } from '@angular/core';
import { Outline } from '../../../enums/outline';
import { Scheme } from '../../../enums/scheme';
import { Size } from '../../../enums/size';
import { Width } from '../../../enums/width';
import { BadgeComponent } from '../../elements/badge/badge.component';
import { PropertyApi } from '../../../decorators/api';
import { TypeButton, UI } from '../../../enums/ui';

@Component({
  selector: 'jnt-button',
  templateUrl: './button.encapsulated.html',
  animations: [
    trigger('spinner', [
        state(
          'void',
          style({
            opacity: 0,
            width: '200px',
            height: '200px'
          })
        ),
        state(
          '*',
          style({
            opacity: 1,
            width: '*',
            height: '*'
          })
        ),
        transition(
          'void => *',
          [
            animate('.5s ease-in-out')
          ]
        ),
      ]
    ),

    trigger('text', [
      state('show', style({
        visibility: 'visible',
        opacity: 1
      })),
      state('hide', style({
        visibility: 'collapse',
        opacity: 0
      })),
      transition('show <=> hide', [
        animate('.5s ease-in-out')
      ]),
    ])
  ]
})


export class ButtonComponent {

  @HostBinding('attr.host') readonly host = 'jnt-button-host';

  @HostBinding('attr.scheme')
  _scheme: Scheme = Scheme.primary;

  @HostBinding('attr.size')
  _size: Size = Size.normal;

  @HostBinding('attr.outline')
  _outline: Outline = Outline.fill;

  @HostBinding('attr.width')
  _width: Width = Width.default;

  @HostBinding('attr.type')
  _type: TypeButton = TypeButton.button;

  ui = UI;

  @PropertyApi({
    description: 'Set the loading status of button',
    type: 'boolean',
    default: 'false'
  })

  @HostBinding('attr.loading')
  @Input()
  loading = false;

  @PropertyApi({
    description: 'Icon for button',
    type: 'string'
  })

  @HostBinding('attr.icon')
  @Input() icon: string;

  @PropertyApi({
    description: 'Button color scheme',
    path: 'ui.schemes',
    options: [Scheme.primary, Scheme.secondary, Scheme.success, Scheme.fail],
    default: Scheme.primary
  })

  @Input() set scheme(scheme: Scheme) {
    this._scheme = scheme || Scheme.primary;
  }

  @PropertyApi({
    description: 'Button size',
    path: 'ui.size',
    options: [Size.tiny, Size.small, Size.normal, Size.large],
    default: Size.normal
  })

  @Input() set size(size: Size) {
    this._size = size || Size.normal;
  }

  @HostBinding('attr.with-text')
  get withText() {
    return !!this.text;
  }

  @PropertyApi({
    description: 'Button outline',
    path: 'ui.outline',
    default: Outline.fill,
    options: [Outline.transparent, Outline.ghost, Outline.fill]
  })

  @Input() set outline(outline: Outline) {
    this._outline = outline || Outline.fill;
  }

  @PropertyApi({
    description: 'Button width',
    path: 'ui.width',
    default: Width.default,
    options: [Width.default, Width.fluid]
  })

  @Input() set width(width: Width) {
    this._width = width || Width.default;
  }

  @HostBinding('attr.disabled')
  get disable() {
    return this.disabled || this.loading;
  }

  @PropertyApi({
    description: 'Set disabled state',
    type: 'boolean',
    default: 'false',
  })

  @Input()
  disabled = false;

  @PropertyApi({
    description: 'Button typeControl',
    path: 'ui.form.button.type',
    default: TypeButton.button,
    options: [TypeButton.button, TypeButton.submit]
  })

  @Input() set type(type: TypeButton) {
    this._type = type || TypeButton.button;
  }

  get type() {
    return this._type;
  }

  @PropertyApi({
    description: 'Text on button',
    type: 'string',
  })

  @Input()
  text: string;

  @PropertyApi({
    description: 'Badge on button',
    type: 'number',
  })

  @ContentChildren(BadgeComponent)
  badges: QueryList<BadgeComponent>;
}
