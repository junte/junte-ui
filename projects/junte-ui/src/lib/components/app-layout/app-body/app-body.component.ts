import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'jnt-app-body',
  templateUrl: './encapsulated.html',
  styleUrls: ['./encapsulated.scss']
})
export class AppBodyComponent implements OnInit {

  @HostBinding('attr.host') readonly host = 'jnt-app-body-host';

  constructor() { }

  ngOnInit() {
  }

}
