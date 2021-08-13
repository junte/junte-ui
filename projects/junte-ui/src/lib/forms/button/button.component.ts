import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ContentChildren, ElementRef, EventEmitter, HostBinding, Input, Output, QueryList, ViewChild } from '@angular/core';
import { Shape } from '../../core/enums/shape';
import { PropertyApi } from '../../core/decorators/api';
import { Outline } from '../../core/enums/outline';
import { Position } from '../../core/enums/position';
import { Scheme } from '../../core/enums/scheme';
import { Size } from '../../core/enums/size';
import { UI } from '../../core/enums/ui';
import { Width } from '../../core/enums/width';
import { BadgeComponent } from '../../elements/badge/badge.component';
import { ButtonType } from './button.enums';

interface Icon {
  icon: string;
  position: Position;
}

@Component({
  selector: 'jnt-button',
  templateUrl: './button.encapsulated.html',
  animations: [
    trigger('appear', [
        state(
          'void',
          style({
            opacity: 0
          })
        ),
        state(
          '*',
          style({
            opacity: 1
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

    trigger('visibility', [
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

  @HostBinding('attr.host')
  readonly host = 'jnt-button-host';

  ui = UI;

  private _type: ButtonType = ButtonType.button;
  icon: Icon;

  @HostBinding('attr.data-scheme')
  _scheme: Scheme = Scheme.primary;

  @HostBinding('attr.data-size')
  _size: Size = Size.normal;

  @HostBinding('attr.data-outline')
  _outline: Outline = Outline.fill;

  @HostBinding('attr.data-width')
  _width: Width = Width.default;

  @HostBinding('attr.data-shape')
  _shape: Shape = Shape.square;

  @PropertyApi({
    description: 'Button shape',
    path: 'ui.shape',
    default: Shape.square,
    options: [Shape.circle, Shape.square]
  })
  @Input()
  set shape(shape: Shape) {
    this._shape = shape || Shape.square;
  }

  @PropertyApi({
    description: 'Set the loading status of button',
    type: 'boolean',
    default: 'false'
  })
  @HostBinding('attr.data-loading')
  @Input()
  loading = false;

  @PropertyApi({
    name: 'icon',
    description: 'Icon for button',
    type: 'string | {icon: string, position: Position}'
  })
  @Input('icon')
  set _icon(icon: string | Icon) {
    this.icon = <Icon>(typeof icon === 'string'
      ? {icon: icon, position: Position.left} : icon);
  }

  @PropertyApi({
    description: 'Button color scheme',
    path: 'ui.scheme',
    options: [Scheme.primary, Scheme.secondary, Scheme.success, Scheme.fail, Scheme.accent],
    default: Scheme.primary
  })
  @Input()
  set scheme(scheme: Scheme) {
    this._scheme = scheme || Scheme.primary;
  }

  @PropertyApi({
    description: 'Button size',
    path: 'ui.size',
    options: [Size.tiny, Size.small, Size.normal, Size.large],
    default: Size.normal
  })
  @Input()
  set size(size: Size) {
    this._size = size || Size.normal;
  }

  get size() {
    return this._size;
  }

  @HostBinding('attr.data-with-text')
  get withText() {
    return !!this.text || this.badges.length > 0;
  }

  @PropertyApi({
    description: 'Button outline',
    path: 'ui.outline',
    default: Outline.fill,
    options: [Outline.transparent, Outline.ghost, Outline.fill]
  })
  @Input()
  set outline(outline: Outline) {
    this._outline = outline || Outline.fill;
  }

  @PropertyApi({
    description: 'Button width',
    path: 'ui.width',
    default: Width.default,
    options: [Width.default, Width.fluid]
  })
  @Input()
  set width(width: Width) {
    this._width = width || Width.default;
  }

  @HostBinding('attr.data-disabled')
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
    path: 'ui.button.type',
    default: ButtonType.button,
    options: [ButtonType.button, ButtonType.submit]
  })
  @Input()
  set type(type: ButtonType) {
    this._type = type || ButtonType.button;
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
    description: 'Aria-label for button',
    type: 'string',
  })
  @Input()
  ariaLabel: string;

  @PropertyApi({
    description: 'Click event',
    path: 'EventEmitter'
  })
  @Output()
  click = new EventEmitter<any>();

  @ContentChildren(BadgeComponent)
  badges: QueryList<BadgeComponent>;

  @ViewChild('buttonRef', {read: ElementRef})
  buttonRef: ElementRef<HTMLButtonElement>;

  focus() {
    this.buttonRef.nativeElement.focus();
  }

}
