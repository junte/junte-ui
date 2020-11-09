import {
  Component, ContentChild,
  ContentChildren,
  ElementRef,
  EventEmitter,
  HostBinding,
  Input, OnDestroy,
  Output,
  QueryList,
  Renderer2,
  TemplateRef
} from '@angular/core';
import { Placement } from '../../core/enums/placement';
import { PropertyApi } from '../../core/decorators/api';
import { UI } from '../../core/enums/ui';

@Component({
  selector: 'jnt-informer-message',
  template: ``
})
export class InformerMessageComponent {

  @Input()
  message: string;
}

@Component({
  selector: 'jnt-informer',
  templateUrl: './informer.encapsulated.html'
})
export class InformerComponent implements OnDestroy {

  ui = UI;
  _backdrop: ElementRef<HTMLElement>;

  @HostBinding('attr.data-placement')
  _placement: Placement = Placement.fixed;

  @HostBinding('attr.host') readonly host = 'jnt-informer-host';

  @PropertyApi({
    description: 'Informer placement',
    path: 'ui.placement',
    default: Placement.fixed,
    options: [Placement.absolute, Placement.fixed]
  })
  @Input()
  set placement(placement: Placement) {
    this._placement = placement || Placement.fixed;
  }

  @PropertyApi({
    description: 'Icon of informer',
    type: 'UI.icons.information'
  })
  @Input() icon = UI.icons.information;

  @PropertyApi({
    description: 'Backdrop of informer',
    type: 'ElementRef'
  })
  @Input()
  set backdrop(backdrop: ElementRef<HTMLElement>) {
    if (!!backdrop) {
      this._backdrop = backdrop;
      this.render.setStyle(backdrop.nativeElement, 'filter', 'blur(5px)');
    }
  }

  get backdrop() {
    return this._backdrop;
  }

  @ContentChildren(InformerMessageComponent, {descendants: true})
  messages: QueryList<InformerMessageComponent>;

  @ContentChild('informerContentTemplate')
  contentTemplate: TemplateRef<any>;

  @Output() ok = new EventEmitter();

  constructor(private render: Renderer2) {
  }

  ngOnDestroy() {
    if (!!this.backdrop) {
      this.render.removeStyle(this.backdrop.nativeElement, 'filter');
    }
  }
}
