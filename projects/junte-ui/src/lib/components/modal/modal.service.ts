import { EventEmitter, Injectable, TemplateRef } from '@angular/core';
import { ModalComponent, ModalContent, ModalFooter, ModalOptions } from './modal.component';

@Injectable({providedIn: 'root'})
export class ModalService {

  private modal: ModalComponent;

  opened$ = new EventEmitter<boolean>();

  register(modal: ModalComponent) {
    if (!modal) {
      throw new Error('jnt-modal component not found');
    } else {
      this.modal = modal;
      this.modal.opened$.subscribe(opened => this.opened$.emit(opened));
    }
  }

  open(content: ModalContent, footer?: TemplateRef<any>, options?: ModalOptions) {
    this.modal.open(content, footer, options);
  }

  close() {
    this.modal.close();
  }
}
