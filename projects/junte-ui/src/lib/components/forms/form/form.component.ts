import {
  Component,
  ContentChild,
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
import { UI } from '../../../enums/ui';
import { FormItemComponent } from './item/form-item.component';

@Component({
  selector: 'jnt-form',
  templateUrl: './form.encapsulated.html'
})
export class FormComponent {

  @HostBinding('attr.host') readonly host = 'jnt-form-host';

  ui = UI;

  @ContentChildren(FormItemComponent, {descendants: true})
  items: QueryList<FormItemComponent>;

  @Input('formGroup')
  form: FormGroup;

  @Input()
  loading = false;

  @Input()
  title: string;

  @ContentChild('formFooterTemplate', {static: false})
  footerTemplate: TemplateRef<any>;

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

  private check(form: any) {
    for (const i in form.controls) {
      const control = form.controls[i];
      control.markAsDirty();
      control.updateValueAndValidity();
      this.check(control);
    }
  }

}
