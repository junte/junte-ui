import { Component, ContentChildren, ElementRef, EventEmitter, HostBinding, Input, Output, QueryList, Renderer2 } from '@angular/core';
import { PropertyApi } from 'projects/junte-ui/src/lib/core/decorators/api';
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
export class InformerComponent {

  ui = UI;
  _backdrop: ElementRef<HTMLElement>;

  @HostBinding('attr.host') readonly host = 'jnt-informer-host';

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

  @Output() ok = new EventEmitter();

  constructor(private render: Renderer2) {
  }

  close() {
    if (!!this.backdrop) {
      this.render.removeStyle(this.backdrop.nativeElement, 'filter');
    }
    this.ok.emit();
  }
}
