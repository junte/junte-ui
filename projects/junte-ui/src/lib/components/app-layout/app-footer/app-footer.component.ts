import {Component, HostBinding, Input, OnInit} from '@angular/core';

@Component({
  selector: 'jnt-app-footer',
  templateUrl: './app-footer.encapsulated.html'
})
export class AppFooterComponent implements OnInit {

  @HostBinding('attr.host') readonly host = 'jnt-app-footer-host';

  @HostBinding('attr.fixed')
  @Input()
  fixed = false;

  constructor() { }

  ngOnInit() {
  }

}
