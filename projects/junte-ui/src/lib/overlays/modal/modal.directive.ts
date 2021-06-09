import { Directive, HostListener, Input } from '@angular/core';
import { ModalService } from './modal.service';
import { ModalOptions } from './modal.types';

@Directive({
  selector: '[jntModal]',
  exportAs: 'jntModal'
})
export class ModalDirective {

  @Input('jntModal')
  options: Partial<ModalOptions>;

  constructor(private modal: ModalService) {

  }

  @HostListener('click')
  click() {
    this.modal.open(null, this.options);
  }

}
