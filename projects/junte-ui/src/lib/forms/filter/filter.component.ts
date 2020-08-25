import { Component, ContentChild, forwardRef, HostBinding, HostListener, Input, TemplateRef } from '@angular/core';
import { AbstractControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NGXLogger } from 'ngx-logger';
import { ContentApi, PropertyApi } from '../../core/decorators/api';
import { UI } from '../../core/enums/ui';

@Component({
  selector: 'jnt-filter',
  templateUrl: './filter.encapsulated.html',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => FilterComponent),
    multi: true
  }]
})
export class FilterComponent {

  ui = UI;

  @HostBinding('attr.host') readonly host = 'jnt-filter-host';

  value: any;

  @HostBinding('attr.data-active')
  get active() {
    return !!this.control.value || !!this.value;
  }

  @PropertyApi({
    description: 'Empty state for filter',
    type: 'any'
  })
  @Input()
  empty: any = null;

  @PropertyApi({
    description: 'Associated form control for filter',
    type: 'AbstractControl'
  })
  @Input()
  control: AbstractControl;

  @PropertyApi({
    description: 'Placeholder for filter',
    type: 'string'
  })
  @Input() placeholder = '';

  @PropertyApi({
    description: 'Icon for filter',
    type: 'string',
  })
  @Input() icon: string;

  @PropertyApi({
    description: 'Label for filter',
    type: 'string'
  })
  @Input() label = '';

  @ContentApi({
    selector: '#filterContentTemplate',
    description: 'Filter content template'
  })
  @ContentChild('filterContentTemplate')
  filterContentTemplate: TemplateRef<any>;

  onChange: (value: any) => void = () => this.logger.error('value accessor is not registered');
  onTouched: () => void = () => this.logger.error('value accessor is not registered');
  registerOnChange = fn => this.onChange = fn;
  registerOnTouched = fn => this.onTouched = fn;
  @HostListener('blur') onBlur = () => this.onTouched();

  constructor(private logger: NGXLogger) {
  }

  writeValue(value: any) {
    this.value = value;
  }

  reset() {
    this.value = this.empty;
    !!this.control ? this.control.setValue(this.value) : this.onChange(this.value);
  }
}
