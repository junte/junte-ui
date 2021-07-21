import { ElementRef, EventEmitter, Injectable } from '@angular/core';
import { PopoverComponent, PopoverOptions } from './popover.component';

// TODO: move to interface and check ngc warnings
export class PopoverInstance {
  hide: () => void;
  picked: (path: Object[]) => boolean;
  update: () => void;
}

@Injectable({providedIn: 'root'})
export class PopoverService {

  private popover: PopoverComponent;
  private target: ElementRef;
  attached = new EventEmitter<ElementRef>();

  constructor() {
    document.addEventListener('scroll', () => {
      if (!!this.popover) {
        this.popover.update();
      }
    }, true);
  }

  register(popover: PopoverComponent): void {
    this.popover = popover;
  }

  private checkRegistration() {
    if (!this.popover) {
      throw new Error('popover component is not registered');
    }
  }

  show(target: ElementRef, options: Partial<PopoverOptions>): PopoverInstance {
    this.checkRegistration();
    this.target = target;
    this.popover.show(target, options);
    this.attached.emit(target);

    return {
      hide: () => this.hide(target),
      picked: (path: Object[]) => this.popover.picked(path),
      update: () => this.popover.update()
    };
  }

  private hide(target: ElementRef = null) {
    if (!this.target || this.target === target) {
      this.popover.hide();
      this.attached.emit(null);
    }
  }

}
