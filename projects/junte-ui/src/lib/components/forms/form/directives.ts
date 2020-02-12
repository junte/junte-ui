import { ContentChildren, Directive, Input, OnInit, QueryList } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControlComponent } from './control/form-control.component';

@Directive({
  selector: '[jntValidation]'
})
export class ValidationDirective implements OnInit {

  @ContentChildren(FormControlComponent, {descendants: true})
  controls: QueryList<FormControlComponent>;

  @Input('formGroup')
  form: FormGroup;

  ngOnInit() {
    this.form.statusChanges.subscribe(() => {
      const controls = this.controls;
      controls.filter(c => !!c.name && !!c.messages.length).forEach(c => {
        const control = this.form.get(c.name);
        const messages = c.messages;
        messages.forEach(m => m.active = !!(control.hasError(m.type) && control.errors && control.dirty));
      });
    });
  }

}
