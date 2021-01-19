import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { Component, ContentChildren, EventEmitter, HostBinding, Input, Output, QueryList } from '@angular/core';
import { PropertyApi } from '../../core/decorators/api';
import { Feature } from '../../core/enums/feature';
import { UI } from '../../core/enums/ui';
import { TabComponent } from './tab.component';

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
  private _active = 0;

  @Input()
  set active(active: number) {
    this._active = active;
    this.changed.emit(active);
  }

  get active() {
    return this._active;
  }

  @Output()
  changed = new EventEmitter<number>();

  @HostBinding('attr.host')
  readonly host = 'jnt-tabs-host';

  @PropertyApi({
    description: 'Adapted tabs on mobile view',
    path: 'ui.feature',
    options: [Feature.adapted]
  })
  @HostBinding('attr.data-features')
  @Input()
  features: Feature[] = [];

  @ContentChildren(TabComponent)
  tabs: QueryList<TabComponent>;
}
