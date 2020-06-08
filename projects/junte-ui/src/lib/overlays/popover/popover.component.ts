import { Component, ElementRef, HostBinding, Input, Renderer2, TemplateRef } from '@angular/core';
import { PropertyApi } from '../../core/decorators/api';
import { Scheme } from '../../core/enums/scheme';
import { PopoverPlacements, PopoverTriggers } from './enums';

export class PopoverOptions {
  title: string;
  content: string;
  contentTemplate: TemplateRef<void>;
  trigger: PopoverTriggers;
  placement: PopoverPlacements;
  maxWidth: string;
  maxHeight: string;
  scheme: Scheme = Scheme.secondary;

  constructor(defs: any = null) {
    Object.assign(this, defs);
  }
}

@Component({
  selector: 'jnt-popover',
  templateUrl: './popover.encapsulated.html'
})
export class PopoverComponent {

  observer = new MutationObserver(() => this.update());
  options = new PopoverOptions();
  target: HTMLElement;
  visible = false;

  @HostBinding('attr.host') readonly host = 'jnt-popover-host';

  @HostBinding('style.display')
  get display() {
    return this.visible ? 'block' : 'none';
  }

  @PropertyApi({
    description: 'scheme',
    type: 'primary | secondary | success | fail',
    default: 'primary'
  })
  @HostBinding('attr.data-scheme')
  get scheme() {
    return this.options.scheme ? this.options.scheme : Scheme.primary;
  }

  @PropertyApi({
    description: 'Title',
    type: 'string',
  })
  @Input() title: string;

  @PropertyApi({
    description: 'Label icon',
    type: 'string | TemplateRef',
  })
  @Input() content: string;

  @PropertyApi({
    description: 'ui.overlays.popover.trigger',
    type: 'hover | click | focus',
    default: 'hover'
  })
  get trigger() {
    return this.options.trigger ? this.options.trigger : PopoverTriggers.hover;
  }

  @PropertyApi({
    description: 'ui.overlays.popover.position',
    type: 'top | left | bottom | rights',
    default: 'top'
  })
  get placement() {
    return this.options.placement ? this.options.placement : PopoverPlacements.top;
  }

  constructor(private renderer: Renderer2,
              private hostRef: ElementRef) {
  }

  private getPosition(target: HTMLElement): { top, left } {
    const rect = target.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    let top = rect.top + scrollTop;
    let left = rect.left + scrollLeft;

    const {nativeElement: host} = this.hostRef;
    switch (this.options.placement) {
      case PopoverPlacements.top: {
        top -= host.clientHeight;
        left += (target.clientWidth - host.clientWidth) / 2;
        break;
      }
      case PopoverPlacements.right: {
        top += (target.clientHeight - host.clientHeight) / 2;
        left += target.clientWidth;
        break;
      }
      case PopoverPlacements.bottom: {
        top += target.clientHeight;
        left += (target.clientWidth - host.clientWidth) / 2;
        break;
      }
      case PopoverPlacements.left: {

        break;
      }
    }


    return {top: top, left};
  }

  show({nativeElement: target}: { nativeElement: HTMLElement },
       options: PopoverOptions): void {
    this.target = target;
    this.options = new PopoverOptions(options);
    this.observer.observe(this.hostRef.nativeElement, {
      childList: true,
      subtree: true
    });

    this.update();
    this.visible = true;
  }

  picked(elements: HTMLElement[]) {
    return elements.indexOf(this.hostRef.nativeElement) !== -1;
  }

  update() {
    const {nativeElement: host} = this.hostRef;
    const position = this.getPosition(this.target);
    this.renderer.setStyle(host, 'top', `${position.top}px`);
    this.renderer.setStyle(host, 'left', `${position.left}px`);
  }

  hide(): void {
    this.observer.disconnect();
    this.options = new PopoverOptions();
    this.visible = false;
  }
}
