import {
  Component,
  ContentChild,
  ContentChildren,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Output,
  QueryList,
  TemplateRef
} from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { filter } from 'rxjs/operators';
import { PropertyApi } from '../../core/decorators/api';
import { UI } from '../../core/enums/ui';
import { FormControlComponent } from './control/form-control.component';
import { FormState } from './enums';

@Component({
  selector: 'jnt-form',
  templateUrl: './form.encapsulated.html'
})
export class FormComponent implements OnInit {

  @HostBinding('attr.host') readonly host = 'jnt-form-host';

  ui = UI;

  formState = FormState;

  @PropertyApi({
    description: 'Name form group',
    type: 'FormGroup',
  })
  @Input('formGroup')
  form: FormGroup;

  @PropertyApi({
    description: 'Title for form',
    type: 'string',
  })
  @Input()
  title: string;

  @PropertyApi({
    description: 'State of form',
    path: 'ui.forms.state',
    options: [FormState.error,
      FormState.loading]
  })
  @Input()
  state: FormState;

  @ContentChild('formTitleTemplate')
  titleTemplate: TemplateRef<any>;

  @ContentChild('formFooterTemplate')
  footerTemplate: TemplateRef<any>;

  @Output()
  submitted = new EventEmitter();

  @ContentChildren(FormControlComponent, {descendants: true})
  controls: QueryList<FormControlComponent>;

  ngOnInit() {
    if (!!this.form) {
      this.form.statusChanges.pipe(filter(() => !!this.controls)).subscribe(() => {
        this.controls.filter(component => !!component.name && !!component.messages.length)
          .forEach(component => {
            const control = component.getControl();
            if (!!control) {
              const messages = component.messages;
              messages.forEach(message => message.active = !!(control.hasError(message.type)
                && control.errors && control.dirty));
            }
          });
      });
    }
  }

  @HostListener('submit')
  onSubmit() {
    if (!!this.form) {
      this.check(this.form);

      if (this.form.valid) {
        this.submitted.emit();
        this.refresh(this.form);
      }
    }
  }

  private check(form: FormGroup | FormArray) {
    Object.keys(form.controls).forEach((key: string) => {
      const control = form.controls[key];

      if (control instanceof FormGroup || control instanceof FormArray) {
        this.check(control);
      } else {
        control.markAsDirty();
        control.updateValueAndValidity();
      }
    });
  }

  private refresh(form: FormGroup | FormArray) {
    Object.keys(form.controls).forEach((key: string) => {
      const control = form.controls[key];

      if (control instanceof FormGroup || control instanceof FormArray) {
        this.refresh(control);
      } else {
        control.markAsPristine();
        control.markAsPristine();
      }
    });
  }
}
