import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Sizes, UI } from '../../../enum/ui';

@Component({
  selector: 'jnt-switch',
  templateUrl: './encapsulated.html'
})
export class SwitchComponent implements OnInit {

  @HostBinding('attr.host') readonly host = 'jnt-switch-host';

  ui = UI;

  @HostBinding('attr.disabled')
  @Input()
  disabled = false;

  @HostBinding('attr.checked')
  @Input()
  checked = false;

  @HostBinding('attr.label')
  @Input()
  label: string;

  @HostBinding('attr.size')
  @Input()
  size: Sizes = Sizes.normal;

  constructor() { }

  ngOnInit() {
  }

}
