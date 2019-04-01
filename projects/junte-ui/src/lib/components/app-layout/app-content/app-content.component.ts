import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'jnt-app-content',
  templateUrl: './encapsulated.html',
  styleUrls: ['./encapsulated.scss']
})
export class AppContentComponent implements OnInit {

  @HostBinding('attr.host') readonly host = 'jnt-app-content-host';

  constructor() {
  }

  ngOnInit() {
  }

}
