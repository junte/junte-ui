import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-breadcrumbs-test1',
  template: `
    <router-outlet></router-outlet>
    <div>
      <jnt-link [source]="['page-2']">Page Last</jnt-link>
    </div>
  `
})

export class BreadCrumbTest1Component implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}
