import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'jnt-app-aside',
  templateUrl: './encapsulated.html',
  styleUrls: ['./encapsulated.scss']
})
export class AppAsideComponent implements OnInit {

  @HostBinding('attr.host') readonly host = 'jnt-app-aside-host';

  @HostBinding('attr.fixed')
  @Input()
  fixed = false;

  @HostBinding('attr.collapsed')
  @Input()
  collapsed = true;

  constructor() { }

  ngOnInit() {
  }

}
