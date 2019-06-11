import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'jnt-circle-bar2',
  templateUrl: './encapsulated.html'
})
export class CircleBar2Component implements OnInit {

  @HostBinding('attr.host') readonly host = 'jnt-circle-bar-host2';

  @HostBinding('attr.size')
  @Input() size: number;

  @Input() value: number;

  constructor() {
  }

  ngOnInit() {
  }

}
