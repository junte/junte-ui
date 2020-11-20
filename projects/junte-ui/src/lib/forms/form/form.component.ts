import { animate, state, style, transition, trigger } from '@angular/animations';
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
import { MethodApi, PropertyApi } from '../../core/decorators/api';
import { Height } from '../../core/enums/height';
import { State } from '../../core/enums/state';
import { UI } from '../../core/enums/ui';
import { FormControlComponent } from './control/form-control.component';

@Component({
  selector: 'jnt-form',
  templateUrl: './form.encapsulated.html',
  animations: [
    trigger('success', [
        state(
          'void',
          style({
            opacity: 0
          })
        ),
        state(
          '*',
          style({
            opacity: 1
          })
        ),
        transition(
          'void <=> *',
          [
            animate('.3s ease-in-out')
          ]
        ),
      ]
    ),
  ]
})
export class FormComponent implements OnInit {

  @HostBinding('attr.host') readonly host = 'jnt-form-host';

  ui = UI;

  _state = {success: false};

  @HostBinding('attr.data-height')
  _height: Height = Height.default;

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

  @PropertyApi({
    description: 'Height of form',
    path: 'ui.height',
    options: [Height.default, Height.fluid],
    default: Height.default
  })
  @Input() set height(height: Height) {
    this._height = height || Height.default;
  }

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

  @MethodApi({description: 'show success animation'})
  success() {
    this._state.success = true;
    setTimeout(() => this._state.success = false, 2100);
  }

  ngOnInit() {
    if (!!this.form) {
      this.form.statusChanges.subscribe(() => {
        this.render();
        this.checked.emit(this.check(this.form));
      });
    }
  }

  render() {
    if (!!this.controls) {
      this.controls.filter(component => !!component.name && !!component.messages.length)
        .forEach(component => component.check());
    }
  }

  private check(form: FormGroup | FormArray): AbstractControl[] {
    let errors = [];
    Object.keys(form.controls).forEach((key: string) => {
      const control = form.controls[key];

      if (control instanceof FormGroup || control instanceof FormArray) {
        errors = errors.concat(this.check(control));
      } else {
        if (!!control.errors && control.dirty) {
          errors.push(control);
        }
      }
    });
    return errors;
  }

  /**
   * @deprecated please use submit() instead
   */
  onSubmit() {
    this.submit();
  }

  @HostListener('submit')
  submit() {
    if (!!this.form) {
      this.validate(this.form);

      if (this.form.valid) {
        this.submitted.emit();
        this.refresh(this.form);
      }
    }
  }

  private validate(form: FormGroup | FormArray) {
    Object.keys(form.controls).forEach((key: string) => {
      const control = form.controls[key];

      if (control instanceof FormGroup || control instanceof FormArray) {
        this.validate(control);
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
      }
    });
  }
}
