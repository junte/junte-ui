import {Component, HostBinding, Input, OnInit} from '@angular/core';

@Component({
  selector: 'jnt-app-footer',
  templateUrl: './app-footer.component.html',
  styleUrls: ['./app-footer.component.scss']
})
export class AppFooterComponent implements OnInit {

  @HostBinding('attr.fixed')
  @Input()
  fixed = false;

  constructor() { }

  ngOnInit() {
  }

}
