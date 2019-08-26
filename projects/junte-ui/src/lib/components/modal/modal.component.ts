import {
  AfterViewInit, ChangeDetectorRef,
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
import { DomSanitizer } from '@angular/platform-browser';
import { UI } from '../../enum/ui';

export enum ModalClosingOption {
  enable = 'enable',
  disable = 'disable'
}

export class ModalOptions {
  title: string;
  maxWidth = '800px';
  maxHeight = '705px';
  closing: ModalClosingOption = ModalClosingOption.enable;

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
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})

export class ModalComponent implements AfterViewInit {

  ui = UI;
  closing = ModalClosingOption;

  private _opened: boolean;
  private modal: HTMLElement;

  template: TemplateRef<any>;
  options: ModalOptions = new ModalOptions();

  @ViewChild('container', {read: ViewContainerRef}) container;

  set content(content: ModalContent) {
    this.template = null;
    this.container.clear();

    if (content instanceof TemplateRef) {
      this.template = content;
    } else if (content instanceof ComponentRef) {
      this.container.insert(content.hostView, 0);
    }
    this.cdr.detectChanges();
  }

  @HostBinding('style.display')
  get visible() {
    return this.sanitizer.bypassSecurityTrustStyle(!!this.opened ? Display.block : Display.none);
  }

  @Output()
  opened$: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input() backdrop: ElementRef;

  @Input()
  set opened(opened: boolean) {
    this._opened = opened;
    this.cdr.detectChanges();
    this.opened$.emit(opened);
  }

  get opened() {
    return this._opened;
  }

  constructor(private sanitizer: DomSanitizer,
              private renderer: Renderer2,
              private element: ElementRef,
              private cdr: ChangeDetectorRef) {
  }

  ngAfterViewInit() {
    this.modal = this.element.nativeElement;
  }

  private setBackdropFilter(filter: string) {
    if (!!this.backdrop) {
      this.renderer.setStyle(this.backdrop.nativeElement, 'filter', filter);
    }
  }

  open(content: ModalContent, options?: ModalOptions) {
    if (!!options) {
      this.options = options;
      this.cdr.detectChanges();
    }
    this.content = content;
    this.setBackdropFilter(BackdropFilter.blur);
    this.opened = true;
    this.cdr.detectChanges();
  }

  close() {
    this.setBackdropFilter(BackdropFilter.none);
    this.opened = false;
    this.options = null;
    this.cdr.detectChanges();
  }
}
