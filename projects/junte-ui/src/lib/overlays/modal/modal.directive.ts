import { Directive, HostListener, Input } from '@angular/core';
import { ModalService } from './modal.service';

@Directive({
  selector: '[jntModal]',
  exportAs: 'jntModal'
})
export class ModalDirective {

  @Input('jntModal') options: Object;

  @HostListener('click')
  click() {
    this.modal.open(null, this.options);
  }

  constructor(private modal: ModalService) {
  }

}
