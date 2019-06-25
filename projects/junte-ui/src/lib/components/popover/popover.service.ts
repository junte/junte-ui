import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PopoverComponent, PopoverOptions } from './popover.component';

@Injectable({providedIn: 'root'})
export class PopoverService {

  popover: PopoverComponent;

  visible$ = new BehaviorSubject<boolean>(false);
  hovered$ = new BehaviorSubject<boolean>(false);

  constructor() {
  }

  register(popover: PopoverComponent): void {
    if (!popover) {
      throw new Error('jnt-popover component not found');
    } else {
      this.popover = popover;
      this.popover.visible$.subscribe(opened => this.visible$.next(opened));
      this.popover.hovered$.subscribe(hovered => this.hovered$.next(hovered));
    }
  }

  show(element: HTMLElement, options: PopoverOptions): void {
    this.popover.show(element, options);
  }

  hide(): void {
    this.popover.hide();
  }
}
