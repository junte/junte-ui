import { Component, Input } from '@angular/core';

@Component({
  selector: 'jnt-select-option',
  template: ''
})
export class SelectOptionComponent {

  @Input() value: any;
  @Input() label: string;

}
