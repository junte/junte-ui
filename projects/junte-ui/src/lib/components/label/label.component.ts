import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Colors, Icons } from '../../enum/ui';

@Component({
  selector: 'jnt-label',
  templateUrl: './encapsulated.html'
})
export class LabelComponent implements OnInit {

  @HostBinding('attr.host') readonly host = 'jnt-label-host';

  @HostBinding('attr.label')
  @Input() label: string;

  @HostBinding('attr.icon')
  @Input() icon: Icons;

  @HostBinding('style.background-color')
  @Input() color: string = Colors.purpleDark;

  constructor() {
  }

  ngOnInit() {
  }

}
