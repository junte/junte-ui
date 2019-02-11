import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {UI} from '../../enum/ui';

@Component({
  selector: 'jnt-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss']
})
export class RadioComponent implements OnInit {

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
