import {
  AfterContentInit,
  Component,
  ContentChildren,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  Output,
  QueryList,
  TemplateRef
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormLayout, UI } from '../../enum/ui';
import { FormItemComponent } from './form-item/form-item.component';

@Component({
  selector: 'jnt-form',
  templateUrl: './form.encapsulated.html'
})
export class FormComponent implements AfterContentInit {

  @HostBinding('attr.host') readonly host = 'jnt-form-host';

  ui = UI;

  @ContentChildren(FormItemComponent, {descendants: true})
  items: QueryList<FormItemComponent>;

  @Input('formGroup')
  form: FormGroup;

  @Input()
  title: string | TemplateRef<void>;

  @Input()
  footerForm: TemplateRef<void>;

  @Input()
  layout: FormLayout = FormLayout.vertical;

  @Output()
  submitted = new EventEmitter();

  @HostListener('submit')
  onSubmit() {
    if (!!this.form) {
      this.check(this.form);

      if (this.form.valid) {
        this.submitted.emit();
      }
    }
  }

  ngAfterContentInit() {
    this.setLayout(this.items);
    this.items.changes.subscribe(items => this.setLayout(items));
  }

  private check(form: any) {
    for (const i in form.controls) {
      form.controls[i].markAsDirty();
      form.controls[i].updateValueAndValidity();
      this.check(form.controls[i]);
    }
  }

  private setLayout(items: QueryList<FormItemComponent>) {
    if (!!items) {
      items.forEach(item => item.layout = this.layout);
    }
  }
}
