import {
  AfterViewInit,
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  EventEmitter,
  HostBinding,
  Input,
  OnDestroy,
  Output,
  QueryList,
  Renderer2,
  TemplateRef, ViewChild
} from '@angular/core';
import { Context } from '../../core/enums/context';
import { Gutter } from '../../core/enums/gutter';
import { Placement } from '../../core/enums/placement';
import { ContentApi, PropertyApi } from '../../core/decorators/api';
import { UI } from '../../core/enums/ui';
import { I18N_PROVIDERS } from '../../core/i18n/providers';
import { ButtonComponent } from '../../forms/button/public_api';

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
  templateUrl: './informer.encapsulated.html',
  providers: [
    ...I18N_PROVIDERS
  ]
})
export class InformerComponent implements AfterViewInit, OnDestroy {

  @HostBinding('attr.host') readonly host = 'jnt-informer-host';

  ui = UI;

  private _backdrop: ElementRef<HTMLElement>;

  @HostBinding('attr.data-outer')
  _outer: Gutter;

  @HostBinding('attr.data-placement')
  _placement: Placement = Placement.fixed;

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
    description: 'Negative margin for informer',
    path: 'ui.gutter',
    options: [Gutter.tiny,
      Gutter.small,
      Gutter.normal,
      Gutter.big,
      Gutter.large,
      Gutter.huge]
  })
  @Input() set outer(outer: Gutter) {
    this._outer = outer;
  }

  @PropertyApi({
    description: 'Informer parent container',
    path: 'ui.context',
    options: [Context.block]
  })
  @HostBinding('attr.data-context')
  @Input() context: Context;

  @PropertyApi({
    description: 'Icon of informer',
    type: 'UI.icons.information'
  })
  @Input()
  icon = UI.icons.information;

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

  @ContentApi({
    selector: '#informerContentTemplate',
    description: 'Informer content template'
  })
  @ContentChild('informerContentTemplate')
  contentTemplate: TemplateRef<any>;

  @ViewChild('okRef')
  okRef: ButtonComponent;

  @Output()
  ok = new EventEmitter();

  constructor(private render: Renderer2) {
  }

  ngAfterViewInit() {
    if (!!this.okRef) {
      this.okRef.focus();
    }
  }

  ngOnDestroy() {
    if (!!this.backdrop) {
      this.render.removeStyle(this.backdrop.nativeElement, 'filter');
    }
  }
}
