import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Colors } from '../../enum/ui';

@Component({
  selector: 'jnt-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {

  @HostBinding('attr.label')
  @Input() label: string;

  @HostBinding('attr.color')
  @Input() color: Colors.purpleDark;

  constructor() {
  }

  ngOnInit() {
  }

}
