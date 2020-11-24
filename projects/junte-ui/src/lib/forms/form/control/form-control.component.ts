import {
  AfterViewInit,
  Component,
  ContentChildren,
  Host,
  HostBinding,
  Input,
  Optional,
  QueryList,
  SkipSelf
} from '@angular/core';
import { AbstractControl, ControlContainer, FormArrayName, FormGroupDirective, FormGroupName } from '@angular/forms';
import { PropertyApi } from '../../../core/decorators/api';
import { UI } from '../../../core/enums/ui';
import { FormMessageComponent } from '../message/form-message.component';

@Component({
  selector: 'jnt-form-control',
  templateUrl: './form-control.encapsulated.html'
})
export class FormControlComponent implements AfterViewInit {

  @HostBinding('attr.host')
  readonly host = 'jnt-form-control-host';

  ui = UI;

  @ContentChildren(FormMessageComponent)
  messages: QueryList<FormMessageComponent>;

  @PropertyApi({
    description: 'Form control name',
    type: 'string'
  })
  @Input()
  name: string;

  constructor(@Optional() @Host() @SkipSelf() private parent: ControlContainer) {
  }

  ngAfterViewInit() {
    this.messages.changes.subscribe(() => this.check());
    this.check();
  }

  check() {
    this.messages.forEach(message =>
      message.active = !!(this.control.hasError(message.validator) && this.control.dirty));
  }

  get control(): AbstractControl {
    return this.parent instanceof FormGroupName
    || this.parent instanceof FormGroupDirective
    || this.parent instanceof FormArrayName
      ? this.parent.control.get(this.name) : null;
  }

}
