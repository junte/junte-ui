import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Colors } from '../../enum/ui';

@Component({
  selector: 'jnt-label',
  templateUrl: './encapsulated.html',
  styleUrls: ['./encapsulated.scss']
})
export class LabelComponent implements OnInit {

  @HostBinding('attr.host') readonly host = 'jnt-label-host';

  @HostBinding('attr.label')
  @Input() label: string;

  @HostBinding('style.background-color')
  @Input() color: string = Colors.purpleDark;

  constructor() {
  }

  ngOnInit() {
  }

}
