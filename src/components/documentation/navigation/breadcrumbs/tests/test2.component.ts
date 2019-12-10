import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-breadcrumbs-test2',
  template: `
    <div>
      <jnt-link [source]="['/components/breadcrumbs']">Home Page</jnt-link>
    </div>
  `
})

export class BreadCrumbTest2Component implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}
