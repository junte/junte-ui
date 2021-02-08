import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { format, getDate } from 'date-fns';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-test-modal-factory-component',
  template: `
    <jnt-form [formGroup]="form">
      <jnt-calendar formControlName="dueDate"></jnt-calendar>
      <jnt-button *ngIf="!footer" text="Cancel"
                  i18n-text="@@action.cancel"
                  (click)="closed.emit()"
                  cancel></jnt-button>
    </jnt-form>
  `
})

export class ModalTestFactoryComponent {

  getDate = getDate;
  format = format;
  period$ = new BehaviorSubject<any>(null);
  footer: boolean;

  @Output() closed = new EventEmitter();

  set period(period: any) {
    this.period$.next(period);
  }

  dueDate = this.fb.control(new Date());
  form = this.fb.group({
    dueDate: this.dueDate
  });

  constructor(private fb: FormBuilder) {
  }

}
