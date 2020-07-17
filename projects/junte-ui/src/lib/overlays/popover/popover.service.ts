import { ElementRef, EventEmitter, Injectable } from '@angular/core';
import { PopoverComponent } from './popover.component';

@Injectable({providedIn: 'root'})
export class PopoverService {

  private popover: PopoverComponent;
  private target: ElementRef;
  updated = new EventEmitter<ElementRef>();

  register(popover: PopoverComponent): void {
    this.popover = popover;
  }

  private checkRegistration() {
    if (!this.popover) {
      throw new Error('popover component is not registered');
    }
  }

  show(target: ElementRef, options: Object): PopoverComponent {
    this.checkRegistration();
    this.target = target;
    this.popover.show(target, options);
    this.updated.emit(target);
    return this.popover;
  }

  hide(target: ElementRef = null): void {
    this.checkRegistration();
    if (!this.target || this.target === target) {
      this.popover.hide();
      this.updated.emit(null);
    }
  }

}
