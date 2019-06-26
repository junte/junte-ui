import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'jnt-app-body',
  templateUrl: './app-body.encapsulated.html'
})
export class AppBodyComponent implements OnInit {

  @HostBinding('attr.host') readonly host = 'jnt-app-body-host';

  constructor() { }

  ngOnInit() {
  }

}
