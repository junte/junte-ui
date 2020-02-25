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
import { PropertyApi } from '../../../decorators/api';
import { UI } from '../../../enums/ui';
import { FormControlComponent } from './control/form-control.component';

@Component({
  selector: 'jnt-form',
  templateUrl: './form.encapsulated.html'
})
export class FormComponent implements OnInit {

  @HostBinding('attr.host') readonly host = 'jnt-form-host';

  ui = UI;

  @ContentChildren(FormControlComponent, {descendants: true})
  controls: QueryList<FormControlComponent>;

  @PropertyApi({
    description: 'Name form group',
    type: 'FormGroup',
  })
  @Input('formGroup')
  form: FormGroup;

  @PropertyApi({
    description: 'Form loading',
    type: 'boolean',
  })
  @Input()
  loading = false;

  @PropertyApi({
    description: 'Title for form',
    type: 'string',
  })
  @Input()
  title: string;

  @ContentChild('formFooterTemplate')
  footerTemplate: TemplateRef<any>;

  @Output()
  submitted = new EventEmitter();

  ngOnInit() {
    this.form.statusChanges.subscribe(() => {
      const controls = this.controls;
      controls.filter(c => !!c.name && !!c.messages.length)
        .forEach(c => {
          const control = this.form.get(c.name);
          const messages = c.messages;
          messages.forEach(m => m.active = !!(control.hasError(m.type) && control.errors && control.dirty));
        });
    });
  }

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
