import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { format, getDate } from 'date-fns';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-test-modal-factory-component',
  template: `
    <jnt-form [formGroup]="form">
      <jnt-calendar formControlName="dueDate"></jnt-calendar>
    </jnt-form>
  `
})

export class ModalTestFactoryComponent {

  getDate = getDate;
  format = format;
  period$ = new BehaviorSubject<any>(null);

  set period(period: any) {
    this.period$.next(period);
  }

  dueDate = new FormControl(new Date());
  form = this.fb.group({
    dueDate: this.dueDate
  });

  constructor(private fb: FormBuilder) {
  }

}
