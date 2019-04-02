import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {Sizes} from '../../enum/ui';

@Component({
  selector: 'jnt-spinner',
  templateUrl: './encapsulated.html',
  styleUrls: ['./encapsulated.scss']
})
export class SpinnerComponent implements OnInit {

  @HostBinding('attr.host') readonly host = 'jnt-spinner-host';

  @HostBinding('attr.size')
  @Input()
  size: Sizes = Sizes.small;

  constructor() { }

  ngOnInit() {
  }

}
