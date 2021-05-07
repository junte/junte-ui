import { animate, AnimationEvent, state, style, transition, trigger } from '@angular/animations';
import {
  Component,
  ComponentRef,
  ElementRef,
  HostBinding,
  Input,
  OnInit,
  Renderer2,
  TemplateRef,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { JunteUIConfig } from '../../config';
import { MethodApi } from '../../core/decorators/api';
import { Breakpoint } from '../../core/enums/breakpoint';
import { UI } from '../../core/enums/ui';
import { BreakpointService } from '../../layout/responsive/breakpoint.service';
import { DeviceService } from '../../layout/responsive/device.service';
import { ModalService } from './modal.service';

const ANIMATION_CLOSE_DURATION = 300;
const BACKDROP_FILTER = 'blur(5px)';

enum ModalState {
  hidden = 'hidden',
  visible = 'visible'
}

interface ModalTitle {
  text?: string;
  icon?: string;
}

export class ModalOptions {

  maxWidth = '800px';
  maxHeight = '600px';
  hold = false;
  closeOutside = true;
  title?: ModalTitle;
  footer?: TemplateRef<any>;
  content?: TemplateRef<any>;

  constructor(defs: Partial<ModalOptions> = null) {
    Object.assign(this, defs);
  }

}

export type ModalContent = TemplateRef<any> | ComponentRef<any>;

enum Display {
  block = 'block',
  none = 'none'
}

@Component({
  selector: 'jnt-modal',
  templateUrl: './modal.encapsulated.html',
  animations: [
    trigger('move', [
        state(
          'hidden',
          style({
            top: '100%',
            left: '50%',
            transform: 'translate(-50%, 0)',
          })
        ),
        state(
          'visible',
          style({
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          })
        ),
        transition(
          'hidden => visible',
          [
            animate('.5s cubic-bezier(0.165, 0.840, 0.440, 1.000)')
          ],
        ),
        transition(
          'visible => hidden',
          [
            animate('.3s cubic-bezier(0.165, 0.840, 0.440, 1.000)')
          ],
        ),
      ]
    ),

    trigger('blackout', [
        state(
          'void',
          style({
            opacity: 0,
          })
        ),
        state(
          '*',
          style({
            opacity: 1,
          })
        ),
        transition(
          'void <=> *',
          [
            animate('.5s ease-in-out')
          ]
        ),
      ]
    ),
  ]
})

export class ModalComponent implements OnInit {

  @HostBinding('attr.host') readonly host = 'jnt-modal-host';

  ui = UI;
  contentTemplate: TemplateRef<any>;
  options: ModalOptions = new ModalOptions();
  mobile: boolean = this.breakpoint.current === Breakpoint.mobile;

  @Input()
  backdrop: ElementRef;

  @ViewChild('container', {read: ViewContainerRef})
  container;

  @HostBinding('style.display')
  display = Display.none;

  @Input()
  opened: boolean;

  constructor(private modalService: ModalService,
              private breakpoint: BreakpointService,
              public device: DeviceService,
              private renderer: Renderer2,
              private hostRef: ElementRef,
              private config: JunteUIConfig) {
  }

  @HostBinding('attr.data-device-tags')
  deviceTags = this.device.tags;

  set content(content: ModalContent) {
    this.contentTemplate = null;
    this.container.clear();

    if (content instanceof TemplateRef) {
      this.contentTemplate = content;
    } else if (content instanceof ComponentRef) {
      this.container.insert(content.hostView, 0);
    }
  }

  ngOnInit() {
    this.modalService.register(this);
  }

  start(event: AnimationEvent) {
    if (event.fromState === ModalState.hidden) {
      this.display = Display.block;
    }
  }

  done(event: AnimationEvent) {
    if (event.toState === ModalState.hidden) {
      this.display = Display.none;
    }
  }

  // TODO: options to type with optionals?.
  @MethodApi({description: 'show modal'})
  open(content: ModalContent, options: Partial<ModalOptions> = {}) {
    this.options = new ModalOptions(options);
    this.content = content;
    if (!!this.backdrop) {
      this.renderer.setStyle(this.backdrop.nativeElement, 'filter', BACKDROP_FILTER);
      if (!this.mobile && this.config.modal.animation) {
        this.renderer.setStyle(this.backdrop.nativeElement, 'animation', 'jnt-scale-in .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards');
      }
    }
    this.renderer.setStyle(document.body, 'overflow', 'hidden');
    this.opened = true;
  }

  @MethodApi({description: 'close modal'})
  close() {
    this.renderer.removeStyle(document.body, 'overflow');
    if (!!this.backdrop) {
      this.renderer.removeStyle(this.backdrop.nativeElement, 'filter');
      if (!this.mobile && this.config.modal.animation) {
        this.renderer.setStyle(this.backdrop.nativeElement, 'animation', 'jnt-scale-out ' + ANIMATION_CLOSE_DURATION + 'ms cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards');
      }
    }
    this.opened = false;
    this.hostRef.nativeElement.scrollTop = 0;
    setTimeout(() => {
      this.content = null;
      if (!!this.backdrop) {
        this.renderer.removeStyle(this.backdrop.nativeElement, 'animation');
      }
    }, ANIMATION_CLOSE_DURATION);
  }
}
