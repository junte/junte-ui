import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'jnt-app-main',
  templateUrl: './encapsulated.html'
})
export class AppMainComponent implements OnInit {

  @HostBinding('attr.host') readonly host = 'jnt-app-main-host';

  constructor() { }

  ngOnInit() {
  }

}
