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
import { FormGroup } from '@angular/forms';
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

  @ContentChild('formFooterTemplate')
  footerTemplate: TemplateRef<any>;

  @Output()
  submitted = new EventEmitter();

  @ContentChildren(FormControlComponent, {descendants: true})
  controls: QueryList<FormControlComponent>;

  ngOnInit() {
    this.form.statusChanges.subscribe(() => {
      this.controls.filter(component => !!component.name && !!component.messages.length)
        .forEach(component => {
          const control = this.form.get(component.name);
          const messages = component.messages;
          messages.forEach(message => message.active = !!(control.hasError(message.type) && control.errors && control.dirty));
        });
    });
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

  private check(form: any) {
    for (const i in form.controls) {
      const control = form.controls[i];
      control.markAsDirty();
      control.updateValueAndValidity();
      this.check(control);
    }
  }

  private refresh(form: any) {
    for (const i in form.controls) {
      const control = form.controls[i];
      control.markAsPristine();
      control.updateValueAndValidity();
      this.refresh(control);
    }
  }
}
