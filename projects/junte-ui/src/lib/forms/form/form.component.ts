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
import { AbstractControl, FormArray, FormGroup } from '@angular/forms';
import { filter } from 'rxjs/operators';
import { State } from '../../core/enums/state';
import { PropertyApi } from '../../core/decorators/api';
import { UI } from '../../core/enums/ui';
import { FormControlComponent } from './control/form-control.component';

@Component({
  selector: 'jnt-form',
  templateUrl: './form.encapsulated.html'
})
export class FormComponent implements OnInit {

  @HostBinding('attr.host') readonly host = 'jnt-form-host';

  ui = UI;

  formState = State;

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
    path: 'ui.state',
    options: [State.error,
      State.loading]
  })
  @Input()
  state: State;

  @ContentChild('formTitleTemplate')
  titleTemplate: TemplateRef<any>;

  @ContentChild('formFooterTemplate')
  footerTemplate: TemplateRef<any>;

  @Output()
  submitted = new EventEmitter();

  @ContentChildren(FormControlComponent, {descendants: true})
  controls: QueryList<FormControlComponent>;

  @Output()
  checked = new EventEmitter<AbstractControl[]>();

  ngOnInit() {
    if (!!this.form) {
      this.form.statusChanges.pipe(filter(() => !!this.controls)).subscribe(() => {
        const errors = [];
        this.controls.filter(component => !!component.name && !!component.messages.length)
          .forEach(component => {
            const control = component.getControl();
            if (!!control) {
              const error = !!control.errors && control.dirty;
              if (error) {
                errors.push(control);
              }
              const messages = component.messages;
              messages.forEach(message => message.active = !!(control.hasError(message.type) && control.dirty));
            }
          });
        console.log(errors);

        this.checked.emit(errors);
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
