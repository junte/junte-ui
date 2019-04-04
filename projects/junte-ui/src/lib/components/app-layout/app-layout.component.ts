import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'jnt-app-layout',
  templateUrl: './encapsulated.html'
})
export class AppLayoutComponent implements OnInit {

  @HostBinding('attr.host') readonly host = 'jnt-app-layout-host';

  constructor() { }

  ngOnInit() {
  }

}
