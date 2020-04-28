import {
  Component,
  ComponentRef,
  ElementRef,
  EventEmitter,
  HostBinding,
  Input,
  Output,
  Renderer2,
  TemplateRef,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { MethodApi } from '../../core/decorators/api';
import { UI } from '../../core/enums/ui';

export enum ModalClosingOption {
  enable = 'enable',
  disable = 'disable'
}

enum ModalState {
  hidden = 'hidden',
  visible = 'visible'
}

interface ModalTitle {
  text?: string;
  icon?: string;
}

export class ModalOptions {
  maxWidth = '800';
  maxHeight = '600';
  closing: ModalClosingOption = ModalClosingOption.enable;
  title?: ModalTitle;
  footer?: TemplateRef<any>;
  content?: TemplateRef<any>;

  constructor(defs: any = null) {
    Object.assign(this, defs);
  }
}

export type ModalContent = TemplateRef<any> | ComponentRef<any>;

enum BackdropFilter {
  none = 'none',
  blur = 'blur(5px)'
}

enum Display {
  block = 'block',
  none = 'none'
}

@Component({
  selector: 'jnt-modal',
  templateUrl: './modal.encapsulated.html',
})

export class ModalComponent {

  private _opened: boolean;

  @HostBinding('attr.host') readonly host = 'jnt-modal-host';

  ui = UI;
  closing = ModalClosingOption;
  contentTemplate: TemplateRef<any>;
  options: ModalOptions = new ModalOptions();

  @Input() backdrop: ElementRef;

  @Output() opened$ = new EventEmitter<boolean>();

  @ViewChild('container', {read: ViewContainerRef}) container;

  @Input()
  @HostBinding('attr.opened')
  set opened(opened: boolean) {
    this._opened = opened;
    this.opened$.emit(opened);
  }

  get opened() {
    return this._opened;
  }

  set content(content: ModalContent) {
    this.contentTemplate = null;
    this.container.clear();

    if (content instanceof TemplateRef) {
      this.contentTemplate = content;
    } else if (content instanceof ComponentRef) {
      this.container.insert(content.hostView, 0);
    }
  }

  constructor(private renderer: Renderer2) {
  }

  @MethodApi({description: 'show modal'})
  open(content: ModalContent, options: ModalOptions = new ModalOptions()) {
    this.options = options;
    this.content = content;
    if (!!this.backdrop) {
      this.renderer.setStyle(this.backdrop.nativeElement, 'filter', BackdropFilter.blur);
    }
    this.renderer.setStyle(document.body, 'overflow', 'hidden');
    this.opened = true;
  }

  @MethodApi({description: 'close modal'})
  close() {
    this.renderer.setStyle(document.body, 'overflow', 'auto');
    if (!!this.backdrop) {
      this.renderer.setStyle(this.backdrop.nativeElement, 'filter', BackdropFilter.none);
    }
    this.opened = false;
  }
}
