import {Component, HostBinding, Input, OnInit} from '@angular/core';

@Component({
  selector: 'jnt-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {

  @HostBinding('attr.fixed')
  @Input()
  fixed = false;

  constructor() {
  }

  ngOnInit() {
  }

}
