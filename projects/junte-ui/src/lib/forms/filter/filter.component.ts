import { Component, ContentChild, EventEmitter, forwardRef, HostBinding, HostListener, Input, Output, TemplateRef } from '@angular/core';
import { AbstractControl, NG_VALUE_ACCESSOR } from '@angular/forms';
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
    return this.selected || (!!this.control && !!this.control.value) || !!this.value;
  }

  @PropertyApi({
    description: 'Condition for selected filter',
    type: 'boolean'
  })
  @Input()
  selected: boolean;

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
  @Input()
  placeholder = '';

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

  @Output()
  clear = new EventEmitter();

  onChange: (value: any) => void;
  onTouched: () => void;
  registerOnChange = fn => this.onChange = fn;
  registerOnTouched = fn => this.onTouched = fn;
  @HostListener('blur') onBlur = () => this.onTouched();

  writeValue(value: any) {
    this.value = value;
  }

  reset() {
    if (!!this.control) {
      this.control.setValue(null);
    } else if (!!this.onChange) {
      this.value = null;
      this.onChange(this.value);
    } else {
      this.clear.emit();
    }
  }

}
