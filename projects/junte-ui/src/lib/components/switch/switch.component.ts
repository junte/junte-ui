import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {UI} from '../../enum/ui';

@Component({
  selector: 'jnt-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent implements OnInit {

  ui = UI;

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
