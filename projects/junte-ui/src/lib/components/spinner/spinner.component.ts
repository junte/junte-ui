import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {Sizes} from '../../enum/ui';

@Component({
  selector: 'jnt-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  @HostBinding('attr.size')
  @Input()
  size: Sizes = Sizes.small;

  constructor() { }

  ngOnInit() {
  }

}
