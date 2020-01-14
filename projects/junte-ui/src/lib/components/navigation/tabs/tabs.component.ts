import { Component, ContentChildren, HostBinding, Input, QueryList } from '@angular/core';
import { Outline, UI } from '../../../enum/ui';
import { TabComponent } from './tab.component';
import { PropertyApi } from '../../../decorators/api';
import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'jnt-tabs',
  templateUrl: './tabs.encapsulated.html',
  animations: [
    trigger('flash', [
        state(
          'void',
          style({
            opacity: 0
          })
        ),
        state(
          '*',
          style({
            opacity: 1,
            width: '150%',
            height: '150%'
          })
        ),
        transition(
          'void => *',
          [
            animate('.4s ease-in-out')
          ]
        ),
        transition(
          '* => void',
          [
            animate('.3s ease-in-out', keyframes([
              style({opacity: '0'}),
            ]))
          ]
        ),
      ]
    ),
  ]
})
export class TabsComponent {

  ui = UI;

  @HostBinding('attr.outline')
  _outline: Outline = Outline.fill;

  @HostBinding('attr.host') readonly host = 'jnt-tabs-host';

  @ContentChildren(TabComponent)
  tabs: QueryList<TabComponent>;

  active = 0;

  @PropertyApi({
    description: 'there is/no background for the content',
    path: 'ui.outline',
    default: Outline.fill,
    options: [Outline.fill, Outline.transparent]
  })

  @Input() set outline(outline: Outline) {
    if (!!outline) {
      this._outline = outline;
    } else {
      this._outline = Outline.fill;
    }
  }

}
