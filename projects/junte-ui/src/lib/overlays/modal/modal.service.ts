import { EventEmitter, Injectable } from '@angular/core';
import { ModalComponent, ModalContent, ModalOptions } from './modal.component';

@Injectable({providedIn: 'root'})
export class ModalService {

  private modal: ModalComponent;

  opened$ = new EventEmitter<boolean>();

  private checkRegistration() {
    if (!this.modal) {
      throw new Error('modal component is not registered');
    }
  }

  register(modal: ModalComponent) {
    this.modal = modal;
    this.modal.opened$.subscribe(opened => this.opened$.emit(opened));
  }

  open(content?: ModalContent, options?: ModalOptions) {
    this.checkRegistration();
    this.modal.open(content, options);
  }

  close() {
    this.checkRegistration();
    this.modal.close();
  }
}
