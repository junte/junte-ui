import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {UI} from '../../enum/ui';

@Component({
  selector: 'jnt-radio',
  templateUrl: './encapsulated.html'
})
export class RadioComponent implements OnInit {

  ui = UI;

  @HostBinding('attr.host') readonly host = 'jnt-radio-host';

  @HostBinding('attr.disabled')
  @Input()
  disabled = false;

  @HostBinding('attr.checked')
  @Input()
  checked = false;

  constructor() { }

  ngOnInit() {
  }

}
