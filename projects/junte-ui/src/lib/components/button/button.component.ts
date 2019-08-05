import { Component, HostBinding, Input } from '@angular/core';
import { Colors, Icons, Outline, Schemes, Sizes, TypeButton, UI, Width } from '../../enum/ui';
import { animate, state, style, transition, trigger } from '@angular/animations';

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

  ui = UI;

  @HostBinding('attr.loading')
  @Input()
  loading = false;

  @HostBinding('attr.icon')
  @Input() icon: Icons;

  @HostBinding('attr.scheme')
  @Input()
  scheme: Schemes = Schemes.primary;

  @HostBinding('attr.color')
  @Input()
  color: Colors = Colors.purple;

  @HostBinding('attr.size')
  @Input()
  size: Sizes = Sizes.normal;

  @HostBinding('attr.with-text')
  get withText() {
    return !!this.text;
  }

  @HostBinding('attr.outline')
  @Input()
  outline: Outline = Outline.fill;

  @HostBinding('attr.width')
  @Input()
  width: Width = Width.default;

  @HostBinding('attr.disabled')
  get disable() {
    return this.disabled || this.loading;
  }

  @Input()
  disabled = false;

  @Input()
  type: TypeButton = TypeButton.button;

  @Input()
  text: string;

  @Input()
  badge: number;
}
