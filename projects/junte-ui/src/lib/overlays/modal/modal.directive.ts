import { Directive, HostListener, Input } from '@angular/core';
import { ModalOptions } from './modal.component';
import { ModalService } from './modal.service';

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
