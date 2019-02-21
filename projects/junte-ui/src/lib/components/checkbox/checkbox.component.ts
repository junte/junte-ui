import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {Icons, UI} from '../../enum/ui';

@Component({
  selector: 'jnt-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  ui = UI;

  @HostBinding('attr.disabled')
  @Input()
  disabled = false;

  @HostBinding('attr.checked')
  @Input()
  checked = false;

  constructor() {
  }

  ngOnInit() {
  }

}
