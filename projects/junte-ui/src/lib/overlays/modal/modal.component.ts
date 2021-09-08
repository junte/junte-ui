import {AnimationEvent} from '@angular/animations';
import {
  ChangeDetectorRef,
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
import {filter} from 'rxjs/operators';
import {JunteUIConfig} from '../../config';
import {MethodApi} from '../../core/decorators/api';
import {Breakpoint} from '../../core/enums/breakpoint';
import {UI} from '../../core/enums/ui';
import {BreakpointService} from '../../layout/responsive/breakpoint.service';
import {DeviceService} from '../../layout/responsive/device.service';
import {MODAL_BLACKOUT, MODAL_MOVE} from './modal.animation';
import {ModalClosedReason, ModalDisplay, ModalScheme, ModalState} from './modal.enums';
import {ModalService} from './modal.service';
import {ModalContent, ModalOptions} from './modal.types';

const ANIMATION_CLOSE_DURATION = 300;
const BACKDROP_FILTER = 'blur(5px)';

@Component({
  selector: 'jnt-modal',
  templateUrl: './modal.encapsulated.html',
  animations: [
    MODAL_MOVE,
    MODAL_BLACKOUT
  ]
})
export class ModalComponent implements OnInit {

  @HostBinding('attr.host')
  readonly host = 'jnt-modal-host';

  ui = UI;
  modalClosedReason = ModalClosedReason;
  contentTemplate: TemplateRef<any>;
  options = new ModalOptions();
  mobile = this.breakpoint.current === Breakpoint.mobile;
  animationTimer: any;

  @Input()
  backdrop: ElementRef;

  @Input()
  opened: boolean;

  @ViewChild('container', {read: ViewContainerRef})
  container: ViewContainerRef;

  @HostBinding('style.display')
  display: ModalDisplay = ModalDisplay.none;

  @HostBinding('attr.data-scheme')
  get scheme() {
    return this.options.scheme || ModalScheme.default;
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

  constructor(private modalService: ModalService,
              private breakpoint: BreakpointService,
              public device: DeviceService,
              private renderer: Renderer2,
              private hostRef: ElementRef,
              private config: JunteUIConfig,
              private cd: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.modalService.register(this);
  }

  start(event: AnimationEvent) {
    if (event.fromState === ModalState.hidden) {
      this.display = ModalDisplay.block;
    }
  }

  done(event: AnimationEvent) {
    if (event.toState === ModalState.hidden) {
      this.display = ModalDisplay.none;
    }
  }

  // TODO: options to type with optionals?.
  @MethodApi({description: 'show modal'})
  open(content: ModalContent, options: Partial<ModalOptions> = {}) {
    clearTimeout(this.animationTimer);
    this.options = new ModalOptions(options);
    this.content = content;
    if (!!this.backdrop) {
      this.renderer.removeStyle(this.backdrop.nativeElement, 'animation');
      this.renderer.setStyle(this.backdrop.nativeElement, 'filter', BACKDROP_FILTER);
      if (!this.mobile && this.config.modal.animation) {
        this.renderer.setStyle(this.backdrop.nativeElement, 'animation',
          'jnt-scale-in .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards');
      }
    }
    this.renderer.setStyle(document.body, 'overflow', 'hidden');
    this.opened = true;
    this.cd.detectChanges();
  }

  @MethodApi({description: 'close modal'})
  close(reason = ModalClosedReason.default) {
    const action = () => {
      this.renderer.removeStyle(document.body, 'overflow');
      if (!!this.backdrop) {
        this.renderer.removeStyle(this.backdrop.nativeElement, 'filter');
        if (!this.mobile && this.config.modal.animation) {
          this.renderer.setStyle(this.backdrop.nativeElement, 'animation', 'jnt-scale-out '
            + ANIMATION_CLOSE_DURATION + 'ms cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards');
        }
      }
      this.opened = false;
      this.hostRef.nativeElement.scrollTop = 0;

      // TODO: for future `this.timers.animation`
      this.animationTimer = setTimeout(() => {
        this.content = null;
        if (!!this.backdrop) {
          this.renderer.removeStyle(this.backdrop.nativeElement, 'animation');
        }
      }, ANIMATION_CLOSE_DURATION);

      if (!!this.options?.closed) {
        this.options.closed(reason);
      }
      this.cd.detectChanges();
    };

    if (!!this.options?.beforeClose) {
      this.options.beforeClose(reason)
        .pipe(filter((close: boolean) => close))
        .subscribe(() => action());
    } else {
      action();
    }
  }
}
