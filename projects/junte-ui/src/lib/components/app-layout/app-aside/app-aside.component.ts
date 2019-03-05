import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'jnt-app-aside',
  templateUrl: './app-aside.component.html',
  styleUrls: ['./app-aside.component.scss']
})
export class AppAsideComponent implements OnInit {

  @HostBinding('attr.fixed')
  @Input()
  fixed = false;

  constructor() { }

  ngOnInit() {
  }

}
