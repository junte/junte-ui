import { ElementRef, Injectable } from '@angular/core';
import { PopoverComponent, PopoverOptions } from './popover.component';

@Injectable({providedIn: 'root'})
export class PopoverService {

  private popover: PopoverComponent;

  register(popover: PopoverComponent): void {
    this.popover = popover;
  }

  private checkRegistration() {
    if (!this.popover) {
      throw new Error('popover component is not registered');
    }
  }

  show(target: ElementRef, options: PopoverOptions): PopoverComponent {
    this.checkRegistration();
    this.popover.show(target, options);
    return this.popover;
  }

  hide(): void {
    this.checkRegistration();
    this.popover.hide();
  }
}
