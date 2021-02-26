import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import {
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  HostBinding,
  Input,
  Output,
  QueryList, Renderer2,
  ViewChild,
  ViewChildren
} from '@angular/core';
import { PropertyApi } from '../../core/decorators/api';
import { Feature } from '../../core/enums/feature';
import { Outline } from '../../core/enums/outline';
import { UI } from '../../core/enums/ui';
import { TabComponent } from './tab.component';

// @ts-ignore
@Component({
  selector: 'jnt-tabs',
  templateUrl: './tabs.encapsulated.html',
  animations: [
    trigger('flash', [
        state('void', style({opacity: 0})),
        state('*', style({opacity: 1, width: '150%', height: '150%'})),
        transition('void => *', [animate('.4s ease-in-out')]),
        transition('* => void', [animate('.3s ease-in-out', keyframes([style({opacity: '0'})]))]),
      ]
    ),
    trigger('move', [
      state('*', style({transform: 'translateX({{distance}}px)'}), {params: {distance: '0'}}),
      transition('* <=> *', [animate('.4s ease-in-out')])
    ])
  ]
})
export class TabsComponent {

  ui = UI;
  private _active = 0;
  distance = 0;

  @ViewChild('lineRef')
  lineRef: ElementRef;

  @Input()
  set active(active: number) {
    this._active = active;
    this.distance = this.links.toArray()[this.active].nativeElement.offsetLeft;
    this.changed.emit(active);
  }

  get active() {
    return this._active;
  }

  @Output()
  changed = new EventEmitter<number>();

  @HostBinding('attr.host')
  readonly host = 'jnt-tabs-host';

  @HostBinding('attr.data-outline')
  _outline: Outline = Outline.fill;

  @PropertyApi({
    description: 'there is/no background for the content',
    path: 'ui.outline',
    default: Outline.fill,
    options: [Outline.fill, Outline.transparent]
  })
  @Input() set outline(outline: Outline) {
    this._outline = outline || Outline.fill;
  }

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

  @ViewChildren('links')
  links: QueryList<ElementRef>;

  constructor(private renderer: Renderer2) {
  }

  setWidth(active: number) {
    const tab = this.links.toArray()[active];
    if (!!tab) {
      this.renderer.setStyle(this.lineRef.nativeElement, 'width', tab.nativeElement.offsetWidth + 'px');
    }
  }

}
