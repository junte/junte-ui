import { ComponentRef, TemplateRef } from '@angular/core';
import { Observable } from 'rxjs';
import { ModalClosedReason, ModalScheme } from './modal.enums';

export interface ModalTitle {
  text?: string;
  icon?: string;
}

export class ModalOptions {
  maxWidth? = '800px';
  maxHeight? = '600px';
  hold? = false;
  closeOutside? = true;
  title?: ModalTitle;
  footer?: TemplateRef<any>;
  content?: TemplateRef<any>;
  beforeClose?: (reason: ModalClosedReason) => Observable<boolean>;
  closed?: (reason: ModalClosedReason) => void;
  scheme? = ModalScheme.default;

  constructor(defs: Partial<ModalOptions> = null) {
    Object.assign(this, defs);
  }
}

export type ModalContent = TemplateRef<any> | ComponentRef<any>;
