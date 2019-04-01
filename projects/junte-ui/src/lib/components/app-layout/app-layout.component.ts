import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'jnt-app-layout',
  templateUrl: './encapsulated.html',
  styleUrls: ['./encapsulated.scss']
})
export class AppLayoutComponent implements OnInit {

  @HostBinding('attr.host') readonly host = 'jnt-app-layout-host';

  constructor() { }

  ngOnInit() {
  }

}
